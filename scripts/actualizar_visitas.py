"""
Descarga el número de visitas de cada página del blog desde Google Analytics
(GA4) y las guarda en _data/visitas.yml, para que Jekyll las use al generar
la web (ver _plugins/visitas.rb).

Se ejecuta automáticamente cada noche mediante
.github/workflows/actualizar-visitas.yml, pero también puedes lanzarlo
a mano en local:

    pip install google-analytics-data pyyaml
    export GA_PROPERTY_ID="properties/123456789"
    export GOOGLE_APPLICATION_CREDENTIALS="ga-credentials.json"
    python scripts/actualizar_visitas.py
"""

import os
import yaml
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)

PROPERTY_ID = os.environ["GA_PROPERTY_ID"]          # p. ej. "properties/123456789"
SALIDA = os.path.join(os.path.dirname(__file__), "..", "_data", "visitas.yml")


def obtener_visitas():
    client = BetaAnalyticsDataClient()  # usa GOOGLE_APPLICATION_CREDENTIALS

    request = RunReportRequest(
        property=PROPERTY_ID,
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews")],
        date_ranges=[DateRange(start_date="2020-01-01", end_date="today")],
        limit=5000,
    )
    response = client.run_report(request)

    visitas = {}
    for row in response.rows:
        ruta = row.dimension_values[0].value
        vistas = int(row.metric_values[0].value)
        # Solo nos interesan las entradas del blog
        if ruta.startswith("/blog/"):
            visitas[ruta] = visitas.get(ruta, 0) + vistas

    return visitas


def main():
    visitas = obtener_visitas()
    with open(SALIDA, "w", encoding="utf-8") as f:
        f.write(
            "# Este archivo se actualiza automáticamente cada noche mediante\n"
            "# .github/workflows/actualizar-visitas.yml — no lo edites a mano.\n"
        )
        yaml.dump(visitas, f, allow_unicode=True, sort_keys=True)

    print(f"Guardadas {len(visitas)} rutas con visitas en {SALIDA}")


if __name__ == "__main__":
    main()
