---
layout: plancks25
title: PLANCKS Barcelona 2025
hidden: True
permalink: /PLANCKS25/WorldwidePreliminaries/
---

<link rel="stylesheet" href="/css/bubbles.css">

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- BANNER -->
<img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">

<h4>Barcelona 2025 Worldwide Preliminaries: Find the PLANCKS Preliminaries in your country!</h4>
      <p style="text-align: justify;">Since PLANCKS is a wide-spread international event, some countries hold preliminary events. Throughout these preliminaries, the best teams in each country are chosen as representation to PLANCKS international finals: Barcelona 2025.</p>
      <p style="text-align: justify;">Don’t miss out, check the PLANCKS Preliminaries venue in your country and come to Barcelona!</p>
      <p style="text-align: justify;">If your country is not listed below, then don’t wait and contact us on plancks25@rsef.es to arrange representing your country.</p>

<!-- SEDES -->

<div class="bubble-parent">
        {% for venue in site.data.PLANCKS25.info_venues %}
        <div class="bubble-container">
          <div class="info-bubble">
            <img src="{{ venue.logo }}" alt="{{ venue.title }} Logo" class="bubble-logo" />
            <h3 class="bubble-title">{{ sede.title }}</h3>
            <p class="bubble-date">Date: {{ sede.date }}</p>
            <p class="bubble-mail">Contact: <a href="mailto:{{ venue.mail }}">{{ sede.mail }}</a></p>
            <p class="bubble-organizers">Organizers: {{ sede.organizers }}</p>
            <div class="bubble-buttons">
              <a href="{{ venue.iaps_link }}" class="btn-plancks25">{IAPS}</a>
              <a href="{{ venue.website_link }}" class="btn-plancks25">Website</a>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>

<!-- <div class="bubble-parent">
<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Costa_Rica.jpg" alt="CR Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Costa Rica</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:lc-montes-de-oca@iaps.info">lc-montes-de-oca@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: University of Costa Rica & CORIOLIS (COsta RIcan OLympiad for physIcs Students)</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/local-committees/lc-montes-de-oca-costa-rica/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.facebook.com/AEFISYMET/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Czech_Republic.png" alt="CZ Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Czech Republic</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:iaps@fykos.cz">iaps@fykos.cz</a></p>
    <p class="bubble-organizers">Organizers: FYKOS, Charles University</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-czech-republic/" class="btn-plancks25">{IAPS}</a>
      <a href="https://caps.fykos.cz" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Finland.png" alt="FN Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Finland</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:integraatiofest@lateksii.fi">integraatiofest@lateksii.fi</a></p>
    <p class="bubble-organizers">Organizers: Lappeenranta University of Technology, PLANCKS-karsinnat</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-finland/" class="btn-plancks25">{IAPS}</a>
      <a href="https://sfmo.fi/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/France.png" alt="FR Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC France</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nc-france@iaps.info">nc-france@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: Université Paris Cité, French Plancks Preliminaries</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-france/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.sfpnet.fr/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Germany.png" alt="DE Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Germany</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:dopplers@jdpg.de">dopplers@jdpg.de</a></p>
    <p class="bubble-organizers">Organizers: Hanover, DOPPLERS (Deutsche Olympiade im Physik-Probleme-Lösen Eifrig Rätselnder Studierender)</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-germany/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.dpg-physik.de/veranstaltungen/2024/dopplers-2024" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Greece.png" alt="GR Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Greece</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:tc-greece@iaps.info">tc-greece@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: National Kapodistrian University of Athens, Road to Plancks – HAPS</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/" class="btn-plancks25">{IAPS}</a>
      <a href="https://en.uoa.gr/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Hungary.png" alt="HU Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Hungary</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:mafihe@mafihe.hu">mafihe@mafihe.hu</a></p>
    <p class="bubble-organizers">Organizers: Eötvös Loránd University, MAFIHE Plancks válogató</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-hungary/" class="btn-plancks25">{IAPS}</a>
      <a href="http://en.mafihe.hu/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/IYPL-logo.jpg" alt="IN Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC India</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:tc-india@iaps.info">tc-india@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: Indian Young Physicists League (Online)</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-india/" class="btn-plancks25">{IAPS}</a>
      <a href="https://iypl2025.github.io/IYPL/" class="btn-plancks25">Website</a> <!--https://www.instagram.com/aips_india/-->
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Italy.png" alt="IT Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Italy</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:Esecutivo@ai-sf.it">Esecutivo@ai-sf.it</a></p>
    <p class="bubble-organizers">Organizers: PrePLANCKS2025 (Online, across 15 universities and cities)</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-italy/" class="btn-plancks25">{IAPS}</a>
      <a href="https://ai-sf.it/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Poland.png" alt="PL Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Poland</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nabla@pwr.edu.pl">nabla@pwr.edu.pl</a></p>
    <p class="bubble-organizers">Organizers: Polish National Preliminaries for PLANCKS 2025, Wrocław University of Science and Technology</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-poland/" class="btn-plancks25">{IAPS}</a>
      <a href="https://pssf.edu.pl/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Portugal.png" alt="PL Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Portugal</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nc-portugal@iaps.info">nc-portugal@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: Preliminares PLANCKS Portugal, Universidade de Lisboa</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-portugal/" class="btn-plancks25">{IAPS}</a>
      <a href="https://physis.com.pt/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Macedonia.png" alt="MA Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Republic of North Macedonia</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nc-macedonia@iaps.info">nc-macedonia@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: PLANCKS 2025 Macedonian Preliminaries, University Ss. Cyril and Methodius</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-macedonia/" class="btn-plancks25">{IAPS}</a>
      <a href="https://mdsfmk.wordpress.com/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Serbia.png" alt="MA Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Serbia</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nc-serbia@iaps.info">nc-serbia@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: PLANĆKS 2025, University of Belgrade</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-serbia/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.instagram.com/asfs.rs/#" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Spain.png" alt="MA Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC Spain</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:nc-spain@iaps.info">nc-spain@iaps.info</a></p>
    <p class="bubble-organizers">Organizers: Preliminares PLANCKS 2025, GdeE RSEF</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-spain/" class="btn-plancks25">{IAPS}</a>
      <a href="https://estudiantes.rsef.es/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/Netherlands.png" alt="NE Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC UK and Ireland</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:pion@nsaweb.nl">pion@nsaweb.nl</a></p>
    <p class="bubble-organizers">Organizers: PION (Project Interuniversitaire Olympiade Natuurkunde), Amsterdam</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-the-netherlands/" class="btn-plancks25">{IAPS}</a>
      <a href="https://pion2023.nsaweb.nl/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/UK_Ireland.png" alt="UK_IR Logo" class="bubble-logo" />
    <h3 class="bubble-title">TC UK and Ireland</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:plancks2024@gmail.com">plancks2024@gmail.com</a></p>
    <p class="bubble-organizers">Organizers: PLANCKS UK&IRE Swansea 2025 – UK and Ireland Preliminaries</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/national-committees/nc-united-kingdom-and-republic-of-ireland/" class="btn-plancks25">{IAPS}</a>
      <a href="https://plancks.uk/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Bucharest.jpg" alt="LC Bu Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC Bucharest</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:asf.unibuc@fizicieni.ro">asf.unibuc@fizicieni.ro</a></p>
    <p class="bubble-organizers">Organizers: PLANCKS preliminary 2025, University of Bucharest</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/local-committees/lc-bucharest-romania/" class="btn-plancks25">{IAPS}</a>
      <a href="https://asfub.wordpress.com/plancks/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Hong_Kong.png" alt="LC HK Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC Hong Kong</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:xwangcityu@gmail.com">xwangcityu@gmail.com</a></p>
    <p class="bubble-organizers">Organizers: PLANCKS 2025 Hong Kong Preliminary, City University of Hong Kong</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/" class="btn-plancks25">{IAPS}</a>
      <a href="https://pshk.org.hk/Competitions/23.html" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Malta.png" alt="LC MA Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC Msida, Malta</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:scicomm@scubed.org.mt">scicomm@scubed.org.mt</a></p>
    <p class="bubble-organizers">Organizers: Malta Preliminaries, University of Malta</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/local-committees/lc-malta/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.scubed.org.mt/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Singapore.jpeg" alt="LC SG Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC NTU, Singapore</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:spmsodysseycomm@e.ntu.edu.sg">spmsodysseycomm@e.ntu.edu.sg</a></p>
    <p class="bubble-organizers">Organizers: PLANCKS 2024 Singapore Preliminary, Nanyang Technological University</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/list-of-iaps-members/local-committees/lc-ntu-singapore/" class="btn-plancks25">{IAPS}</a>
      <a href="https://odysseyprogramme.github.io/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div class="bubble-container">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Saint_Petersburg.png" alt="LC SP Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC Saint Petersburg</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:iaps.spbstu@gmail.com">iaps.spbstu@gmail.com</a></p>
    <p class="bubble-organizers">Organizers: PCPS (Polytechnic Community of Physics Students), Peter the Great Saint Petersburg Polytechnic University</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/local-committees/lc-saint-petersburg-russia/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.instagram.com/pcps.spb/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>

<div>
</div>

<div class="bubble-container" style="text-align: center;">
  <div class="info-bubble">
    <img src="/img/eventos/2025-PLANCKS/NCs/LC_Santo_Domingo.png" alt="LC SD Logo" class="bubble-logo" />
    <h3 class="bubble-title">LC Santo Domingo</h3>
    <p class="bubble-date">Date: </p>
    <p class="bubble-mail">Contact: <a href="mailto:aef.uasd@gmail.com">aef.uasd@gmail.com</a></p>
    <p class="bubble-organizers">Organizers: University of Santo Domingo</p>
    <div class="bubble-buttons">
      <a href="https://iaps.info/members/local-committees/lc-santo-domingo-dominican-republic/" class="btn-plancks25">{IAPS}</a>
      <a href="https://www.instagram.com/aef_uasd/" class="btn-plancks25">Website</a>
    </div>
  </div>
</div>
</div> -->

<!-- SPONSORS -->
      {% include PLANCKS25_patrocinadores.html %}
	  
    </div>
  </div>
</div>
