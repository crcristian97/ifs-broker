import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | IFS Broker",
  description: "Política de Privacidad de IFS - Insurance Financial Solution LLC. Tratamiento de datos personales en broker-ifs.com",
  robots: "index, follow",
}

const css = `
  :root{
    --navy:#1e1b4b;
    --azul-oscuro:#3E4095;
    --azul:#0098DA;
    --teal:#5CC6D0;
    --celeste:#91D8F7;
    --fondo:#f0f2f7;
    --texto:#1a1a2e;
    --texto-suave:#5a5a6e;
    --borde:#e0e3ed;
    --blanco:#ffffff;
    --max-width:880px;
  }
  .legal-page *{box-sizing:border-box;margin:0;padding:0}
  .legal-header{
    background:linear-gradient(135deg,var(--navy) 0%,var(--azul-oscuro) 100%);
    color:var(--blanco);
    padding:32px 24px;
  }
  .legal-header .inner{
    max-width:var(--max-width);
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:16px;
  }
  .legal-header .brand{font-weight:700;font-size:20px;letter-spacing:0.5px}
  .legal-header .brand a{color:var(--blanco);text-decoration:none}
  .legal-header .back{
    color:var(--celeste);text-decoration:none;font-size:14px;
    padding:8px 16px;border:1px solid var(--celeste);border-radius:6px;transition:all 0.2s;
  }
  .legal-header .back:hover{background:var(--celeste);color:var(--navy)}
  .legal-main{
    max-width:var(--max-width);
    margin:0 auto;
    padding:48px 24px 80px;
  }
  .doc-title{font-size:36px;color:var(--azul-oscuro);margin-bottom:8px;font-weight:700;line-height:1.2}
  .doc-meta{
    color:var(--texto-suave);font-size:14px;margin-bottom:40px;
    padding-bottom:24px;border-bottom:2px solid var(--celeste);
  }
  .doc-meta strong{color:var(--texto)}
  .legal-main h2{color:var(--azul-oscuro);font-size:24px;margin-top:48px;margin-bottom:16px;padding-top:8px;font-weight:700}
  .legal-main h3{color:var(--azul);font-size:18px;margin-top:28px;margin-bottom:12px;font-weight:600}
  .legal-main p{margin-bottom:16px}
  .legal-main ul,.legal-main ol{margin-bottom:16px;padding-left:24px}
  .legal-main li{margin-bottom:8px}
  .legal-main strong{color:var(--texto);font-weight:600}
  .legal-main hr{border:none;border-top:1px solid var(--borde);margin:32px 0}
  .legal-main a{color:var(--azul);text-decoration:underline}
  .legal-main a:hover{color:var(--azul-oscuro)}
  .contacto-box{
    background:var(--blanco);border-left:4px solid var(--azul);
    padding:20px 24px;margin:24px 0;border-radius:0 8px 8px 0;
    box-shadow:0 2px 8px rgba(30,27,75,0.05);
  }
  .contacto-box h2{margin-top:0;font-size:20px}
  .nota{
    font-style:italic;color:var(--texto-suave);font-size:14px;
    text-align:center;margin-top:48px;padding-top:24px;border-top:1px solid var(--borde);
  }
  .legal-footer{
    background:var(--navy);color:var(--celeste);
    padding:32px 24px;text-align:center;font-size:14px;
  }
  .legal-footer a{color:var(--celeste);margin:0 12px}
  @media(max-width:640px){
    .doc-title{font-size:28px}
    .legal-main h2{font-size:20px}
    .legal-main h3{font-size:16px}
    .legal-main{padding:32px 16px 64px}
  }
`

const mainContent = `
<h1 class="doc-title">Política de Privacidad</h1>
<p class="doc-meta"><strong>Última actualización:</strong> 6 de mayo de 2026 &nbsp;·&nbsp; <strong>Versión:</strong> 1.3</p>

<h2>1. Identificación del Responsable del Tratamiento</h2>
<p>El sitio web <strong>www.broker-ifs.com</strong> (en adelante, el "Sitio") es titularidad de <strong>Insurance Financial Solution LLC</strong> (en adelante, "IFS", "nosotros" o "la Empresa"), sociedad constituida bajo las leyes del Estado de Delaware, Estados Unidos de América, con domicilio legal en 16192 Coastal Highway, Lewes, Delaware 19958, Sussex County, Estados Unidos.</p>
<p>IFS opera como intermediario en la comercialización de seguros de personas, planes de salud internacional y productos de retiro e inversión, en alianza con compañías aseguradoras y administradoras internacionales.</p>
<div class="contacto-box">
  <h2 style="margin-top:0;font-size:18px;color:#3E4095;border:none;padding:0">Datos de contacto para asuntos de privacidad</h2>
  <ul style="margin:12px 0 0 0;padding-left:20px">
    <li>Correo electrónico: <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a></li>
    <li>WhatsApp: +54 9 351 242 3249</li>
    <li>Canal de atención: área de administración de IFS</li>
  </ul>
</div>

<h2>2. Alcance y aceptación</h2>
<p>Esta Política de Privacidad describe cómo IFS recolecta, utiliza, almacena, comparte y protege la información personal de los visitantes y usuarios del Sitio (en adelante, el "Usuario" o "Titular"). Al navegar el Sitio, completar formularios o utilizar nuestras herramientas (como el cotizador o el sistema de agendamiento), el Usuario declara haber leído, comprendido y aceptado los términos de esta Política.</p>
<p>Si el Usuario no estuviera de acuerdo con esta Política, deberá abstenerse de utilizar el Sitio y de proporcionar información personal a IFS.</p>
<p>Esta Política integra y debe leerse en conjunto con los <a href="/terminos-y-condiciones">Términos y Condiciones</a> del Sitio, que regulan los aspectos comerciales, contractuales y de responsabilidad. En caso de conflicto entre ambos documentos respecto al tratamiento de datos personales, prevalecerá lo dispuesto en esta Política.</p>
<p>IFS comercializa exclusivamente productos de Compañías internacionales y no opera en el mercado local de la jurisdicción de residencia del Usuario, salvo indicación expresa en contrario por parte de la Compañía emisora del producto. El Usuario accede al Sitio y suministra sus datos por iniciativa propia, libre y voluntaria, en el marco descrito en los Términos y Condiciones.</p>

<h2>3. Definiciones</h2>
<p>Para los efectos de esta Política:</p>
<ul>
  <li><strong>Datos Personales:</strong> toda información de cualquier tipo referida a personas humanas determinadas o determinables.</li>
  <li><strong>Datos Sensibles:</strong> datos personales que revelan origen racial o étnico, opiniones políticas, convicciones religiosas o filosóficas, afiliación sindical, información referente a la salud, a la vida o salud sexual, datos genéticos, datos biométricos cuando sean utilizados para identificar de manera unívoca a una persona, y datos de geolocalización precisa.</li>
  <li><strong>Tratamiento:</strong> operaciones y procedimientos sistemáticos que permitan la recolección, conservación, ordenación, almacenamiento, modificación, evaluación, utilización, bloqueo y cancelación de datos personales.</li>
  <li><strong>Titular de los Datos:</strong> persona humana cuyos datos personales son objeto de tratamiento.</li>
  <li><strong>Cesión:</strong> toda revelación de datos personales a una persona distinta del Titular.</li>
  <li><strong>Encargado del Tratamiento:</strong> persona humana o jurídica que trata datos personales por cuenta y según instrucciones de IFS, en virtud de una relación contractual de prestación de servicios.</li>
</ul>

<h2>4. Datos personales que recolectamos</h2>
<p>IFS recolecta únicamente los datos personales necesarios para cumplir con las finalidades descritas en esta Política. Las categorías de datos que podemos recolectar son:</p>

<h3>4.1. Datos de identificación y contacto</h3>
<p>Nombre y apellido, fecha de nacimiento, nacionalidad, país y ciudad de residencia, correo electrónico, número de teléfono o WhatsApp, ocupación o profesión.</p>

<h3>4.2. Datos suministrados a través del cotizador y formularios</h3>
<p>Edad, género, condición de fumador o no fumador, suma asegurada deseada, plazo de cobertura, datos relevantes para el cálculo de primas y cualquier otro dato que el Usuario decida proporcionar voluntariamente al solicitar una cotización.</p>
<p>El cálculo de cotizaciones implica un <strong>procesamiento automatizado</strong> de los datos ingresados, basado en tablas actuariales y parámetros provistos por las Compañías. Los resultados generados son meramente orientativos y están sujetos a evaluación de riesgo (underwriting) y aceptación final por parte de la Compañía emisora correspondiente. El Usuario tiene derecho a solicitar la <strong>revisión humana</strong> de cualquier resultado, así como a obtener una explicación de la lógica general aplicada al cálculo, comunicándose con IFS por los canales indicados en la Sección 20.</p>

<h3>4.3. Datos sensibles — salud y financieros</h3>
<p>Cuando el Usuario solicita un análisis de necesidades, una cotización detallada o una propuesta personalizada, podemos requerir información sobre estado de salud, antecedentes médicos, hábitos de vida, ingresos, patrimonio, capacidad de ahorro, objetivos financieros y composición del grupo familiar. <strong>El suministro de estos datos es voluntario</strong> y podrá realizarse en instancias posteriores al contacto inicial, generalmente en reuniones presenciales o virtuales con un asesor.</p>

<h3>4.4. Datos de navegación</h3>
<p>Dirección IP, tipo y versión de navegador, sistema operativo, fecha y hora de acceso, páginas visitadas, tiempo de permanencia y referidor (sitio desde el cual el Usuario accedió). Estos datos se procesan en forma agregada y con fines estadísticos, de seguridad informática y de prevención de fraude.</p>

<h3>4.5. Datos suministrados a través de plataformas de terceros</h3>
<p>Cuando el Usuario agenda una reunión utilizando <strong>Calendly</strong>, dicha herramienta opera como medio técnico mediante el cual el propio Usuario nos suministra sus datos de contacto y el horario seleccionado. Calendly actúa como Encargado del Tratamiento conforme a la Sección 9.2.</p>
<p>Cuando el Usuario nos contacta a través de <strong>WhatsApp</strong>, recibimos su número de teléfono, mensajes, archivos y cualquier otro contenido que decida enviarnos. WhatsApp es una plataforma propiedad de <strong>Meta Platforms, Inc.</strong>, sujeta a sus propios términos y políticas de privacidad. IFS no tiene control sobre el almacenamiento, encriptación ni procesamiento que Meta realiza de dichas comunicaciones, las cuales pueden involucrar transferencias internacionales a servidores ubicados en Estados Unidos u otras jurisdicciones donde Meta opere.</p>

<h3>4.6. Registro de comunicaciones</h3>
<p>IFS podrá <strong>registrar, conservar y archivar</strong> las comunicaciones mantenidas con el Usuario por cualquier canal, incluyendo correos electrónicos, mensajes de WhatsApp, registros de llamadas telefónicas, notas de reuniones presenciales o virtuales y, <strong>con consentimiento previo del Usuario, grabaciones de audio o video</strong> de reuniones. Estos registros se utilizan con fines de cumplimiento regulatorio, calidad de servicio, evidencia probatoria, atención de consultas posteriores y prevención de fraude, conforme a las finalidades de la Sección 6 y los plazos de conservación de la Sección 11.</p>

<h2>5. Cómo recolectamos los datos</h2>
<p>Los datos personales son recolectados a través de los siguientes canales:</p>
<ul>
  <li>Formularios de contacto del Sitio.</li>
  <li>Cotizador de seguros de vida.</li>
  <li>Sistema de agendamiento de reuniones (Calendly).</li>
  <li>Comunicaciones por correo electrónico, WhatsApp o telefónicas iniciadas por el Usuario.</li>
  <li>Reuniones presenciales o virtuales con asesores de IFS.</li>
  <li>Cookies y tecnologías similares (ver Sección 12).</li>
</ul>
<p><strong>IFS no recolecta datos personales sin el conocimiento del Titular</strong>, salvo aquellos datos de navegación y cookies técnicas estrictamente necesarias para el funcionamiento del Sitio.</p>

<h2>6. Finalidades del Tratamiento</h2>
<p>Los datos personales se tratan con las siguientes finalidades:</p>
<ol>
  <li><strong>Atención de consultas e información comercial.</strong> Responder a las preguntas del Usuario, brindar información sobre productos disponibles y enviar material informativo solicitado.</li>
  <li><strong>Elaboración de cotizaciones y propuestas.</strong> Calcular primas indicativas, preparar propuestas personalizadas y presentar opciones disponibles a través de las compañías con las que IFS opera.</li>
  <li><strong>Intermediación en la contratación de productos.</strong> <strong>Facilitar y acompañar</strong> al Usuario en el proceso de suscripción ante las compañías aseguradoras o administradoras seleccionadas, sin que IFS ejecute operaciones por cuenta y orden del Usuario, las cuales se realizan directamente por éste ante la Compañía emisora correspondiente.</li>
  <li><strong>Cumplimiento de obligaciones regulatorias.</strong> Cumplir con normas de prevención de lavado de activos, financiamiento del terrorismo, conozca a su cliente (KYC) y demás obligaciones aplicables, conforme a la normativa de la jurisdicción de constitución de IFS y a los requerimientos regulatorios y de cumplimiento exigidos por las Compañías emisoras.</li>
  <li><strong>Comunicación posventa y seguimiento.</strong> Mantener al Usuario informado del estado de su producto contratado, novedades relevantes, vencimientos, renovaciones y siniestros.</li>
  <li><strong>Mejora del Sitio y de la experiencia del Usuario.</strong> Análisis estadístico agregado, prevención de fraude y seguridad informática.</li>
  <li><strong>Marketing directo (con consentimiento previo).</strong> Envío de newsletters, contenidos educativos, invitaciones a eventos o promociones, siempre que el Usuario lo haya consentido y con opción de baja en cada comunicación.</li>
</ol>
<p>IFS <strong>no utilizará los datos personales para finalidades distintas</strong> a las aquí declaradas sin obtener el consentimiento previo y específico del Titular.</p>

<h2>7. Base legal del Tratamiento</h2>
<p>El tratamiento de los datos personales se realiza sobre las siguientes bases legales, según la naturaleza del dato y el contexto:</p>
<ul>
  <li><strong>Consentimiento del Titular</strong>, manifestado al completar formularios, aceptar esta Política o solicitar voluntariamente productos o servicios.</li>
  <li><strong>Ejecución de una relación precontractual o contractual</strong>, cuando el tratamiento es necesario para gestionar una cotización o contratación solicitada por el Usuario.</li>
  <li><strong>Cumplimiento de obligaciones legales</strong>, en particular en materia de seguros, prevención de lavado de activos y normativas tributarias.</li>
  <li><strong>Interés legítimo</strong>, en aspectos como la seguridad del Sitio, la prevención de fraude y la mejora de los servicios, siempre balanceado con los derechos fundamentales del Titular.</li>
</ul>
<p>En el caso de <strong>datos sensibles</strong> (especialmente datos de salud), el tratamiento se realiza únicamente sobre la base del <strong>consentimiento expreso e informado</strong> del Titular, y exclusivamente con la finalidad de gestionar la cotización o suscripción de los productos solicitados.</p>

<h2>8. Datos sensibles — Tratamiento reforzado</h2>
<p>IFS reconoce que los datos de salud y financieros tienen carácter sensible y aplica medidas de protección reforzadas:</p>
<ul>
  <li>Solo se solicitan los datos sensibles <strong>estrictamente indispensables</strong> para emitir la cotización o suscribir el producto.</li>
  <li>El Usuario puede negarse a proporcionarlos, aunque ello pueda imposibilitar la obtención de una cotización ajustada o la contratación efectiva del producto.</li>
  <li>Estos datos se transmiten directamente a las compañías aseguradoras o administradoras pertinentes a través de canales seguros y se conservan por el tiempo mínimo legalmente exigido.</li>
  <li>IFS no comercializa, alquila ni cede datos sensibles a terceros con finalidades distintas a la operación específica solicitada por el Usuario.</li>
</ul>

<h2>9. Compartición de datos con terceros</h2>
<p>IFS podrá compartir datos personales con los siguientes destinatarios, exclusivamente en la medida necesaria para las finalidades autorizadas:</p>

<h3>9.1. Compañías emisoras y administradoras</h3>
<p>Para gestionar cotizaciones, suscribir pólizas o administrar productos, IFS comparte datos personales del Usuario con las <strong>Compañías emisoras directas</strong> con las que opera, tales como <strong>Best Doctors Insurance, Ole Best e Investors Trust</strong>, entre otras con las que IFS pudiera operar en el futuro. Estas entidades aplican sus propias políticas de privacidad, las cuales se recomienda al Usuario consultar.</p>
<p>Adicionalmente, los productos contratados pueden contar con respaldo de <strong>reaseguradoras internacionales</strong> (como Munich Re, RGA, Partner Re y Swiss Re) que reciben datos del Usuario <strong>únicamente por intermedio de las Compañías emisoras</strong>, en el marco de sus relaciones contractuales de reaseguro, <strong>sin que IFS realice cesiones directas a dichas reaseguradoras</strong>. La cesión de datos a las reaseguradoras, cuando ocurra, se rige por las políticas de privacidad de cada Compañía emisora.</p>

<h3>9.2. Proveedores tecnológicos (encargados del tratamiento)</h3>
<ul>
  <li><strong>Calendly</strong> (Calendly LLC, Estados Unidos) — sistema de agendamiento de reuniones.</li>
  <li><strong>Proveedor de hosting del Sitio</strong> — almacenamiento técnico del Sitio.</li>
  <li><strong>Proveedor de correo electrónico corporativo</strong> — gestión de comunicaciones.</li>
  <li>Eventualmente, <strong>plataformas de CRM, marketing y analítica</strong> que se incorporen en el futuro, lo cual será reflejado en una actualización de esta Política.</li>
</ul>
<p>Estos proveedores acceden a los datos únicamente para prestar el servicio contratado, bajo obligaciones contractuales de confidencialidad y seguridad.</p>

<h3>9.3. Autoridades públicas</h3>
<p>Cuando exista una obligación legal, requerimiento judicial o administrativo válido, o cuando sea necesario para proteger derechos legítimos de IFS, de los Usuarios o de terceros.</p>

<h3>9.4. Asesores profesionales</h3>
<p>Abogados, contadores y auditores sujetos a deber de secreto profesional, cuando su intervención sea necesaria.</p>
<p><strong>IFS no vende, alquila ni comercializa los datos personales de sus Usuarios.</strong></p>

<h2>10. Transferencias internacionales de datos</h2>
<p>Dado que IFS opera en alianza con compañías y proveedores ubicados en distintas jurisdicciones (Estados Unidos, Bermudas, Islas Caimán, Reino Unido, Suiza, Argentina, entre otras), los datos personales pueden ser transferidos fuera del país de residencia del Usuario.</p>
<p>IFS adopta las siguientes salvaguardas para estas transferencias:</p>
<ul>
  <li>Selección de contrapartes con estándares de protección adecuados.</li>
  <li>Inclusión de cláusulas contractuales de confidencialidad y protección de datos en los acuerdos con terceros.</li>
  <li>Limitación de la transferencia a los datos estrictamente necesarios.</li>
</ul>
<p>Para Usuarios residentes en la <strong>Unión Europea o el Espacio Económico Europeo</strong>, IFS aplicará las salvaguardas adicionales exigidas por el Reglamento General de Protección de Datos (UE) 2016/679, incluyendo, cuando corresponda, <strong>Cláusulas Contractuales Tipo (Standard Contractual Clauses)</strong> aprobadas por la Comisión Europea, evaluación de impacto de transferencia, y medidas suplementarias técnicas u organizativas que resulten necesarias.</p>
<p>Al aceptar esta Política y solicitar productos que involucran a compañías internacionales, el Usuario presta su consentimiento informado para dichas transferencias.</p>

<h2>11. Plazo de conservación</h2>
<p>Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recolectados y, posteriormente, durante los plazos legalmente exigidos para fines fiscales, contables, regulatorios o para la atención de eventuales reclamos. Como referencia general:</p>
<ul>
  <li>Datos de prospectos sin contratación: hasta <strong>24 meses</strong> desde la última interacción del Usuario con IFS o desde la última comunicación enviada por IFS al Usuario, lo que ocurra después, salvo solicitud previa de supresión.</li>
  <li>Datos de clientes con productos contratados: durante la vigencia del producto y, posteriormente, <strong>diez (10) años</strong> o el plazo mayor que exija la normativa aplicable.</li>
  <li>Datos de navegación agregados: hasta <strong>24 meses</strong>.</li>
</ul>
<p>Vencidos estos plazos, <strong>IFS procederá a la supresión o anonimización de los datos en los términos y oportunidades que resulten razonables conforme a sus procedimientos internos</strong>.</p>
<p><strong>Conservación posterior al ejercicio del derecho de supresión.</strong> En el supuesto de que el Titular ejerza su derecho de supresión, IFS conservará únicamente aquellos datos cuya retención sea legalmente obligatoria (por ejemplo, registros derivados de obligaciones de prevención de lavado de activos, documentación contable, comunicaciones que constituyan prueba de relaciones comerciales o requerimientos regulatorios). Dichos datos serán bloqueados del tratamiento activo, accesibles únicamente para el cumplimiento de la obligación legal específica, y se procederá a su supresión definitiva al vencimiento del plazo legal correspondiente.</p>

<h2>12. Cookies y tecnologías similares</h2>
<p>El Sitio puede utilizar cookies y tecnologías similares para garantizar su correcto funcionamiento, recordar preferencias del Usuario y, eventualmente, generar estadísticas de uso.</p>
<p><strong>Tipos de cookies que pueden utilizarse:</strong></p>
<ul>
  <li><strong>Cookies técnicas o estrictamente necesarias.</strong> Imprescindibles para la navegación; no requieren consentimiento.</li>
  <li><strong>Cookies de preferencia.</strong> Recuerdan idioma u otras preferencias.</li>
  <li><strong>Cookies analíticas (en caso de implementarse).</strong> Permiten conocer cómo se utiliza el Sitio de forma agregada.</li>
  <li><strong>Cookies de marketing (en caso de implementarse).</strong> Permiten mostrar publicidad relevante.</li>
</ul>
<p>Al momento de la última actualización de esta Política, el Sitio <strong>no utiliza cookies analíticas ni de marketing de terceros de forma activa</strong>. En caso de incorporarse, esta Política será actualizada y se solicitará el consentimiento del Usuario cuando legalmente corresponda.</p>
<p>El Usuario puede configurar su navegador para bloquear o eliminar cookies, en el entendido de que ello podrá afectar la funcionalidad del Sitio.</p>

<h2>13. Derechos del Titular de los datos</h2>
<p>El Titular de los datos personales tiene, según la jurisdicción aplicable, los siguientes derechos:</p>
<ul>
  <li><strong>Acceso.</strong> Conocer qué datos personales suyos están siendo tratados por IFS.</li>
  <li><strong>Rectificación.</strong> Solicitar la corrección de datos inexactos, incompletos o desactualizados.</li>
  <li><strong>Supresión / Cancelación.</strong> Pedir que sus datos sean eliminados cuando ya no sean necesarios para la finalidad o cuando hubiere retirado el consentimiento.</li>
  <li><strong>Oposición.</strong> Oponerse al tratamiento de sus datos para finalidades específicas, incluido el marketing directo.</li>
  <li><strong>Portabilidad</strong> (cuando legalmente proceda). Recibir sus datos en formato estructurado y de uso común.</li>
  <li><strong>Limitación del tratamiento</strong> (cuando legalmente proceda). Solicitar la suspensión temporal del tratamiento.</li>
  <li><strong>Revocación del consentimiento.</strong> Retirar el consentimiento prestado previamente, sin efecto retroactivo.</li>
  <li><strong>No ser objeto de decisiones automatizadas</strong> que produzcan efectos jurídicos significativos sin intervención humana.</li>
</ul>
<p>Los Usuarios residentes en la <strong>República Argentina</strong> podrán contactar a la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>, autoridad local de aplicación en materia de protección de datos personales bajo la Ley N° 25.326, si entendieran que sus derechos han sido vulnerados, sin que ello implique sometimiento de IFS a una jurisdicción distinta a la indicada en la Sección 19. En otras jurisdicciones aplicarán las normativas equivalentes y las autoridades de control correspondientes.</p>

<h2>14. Cómo ejercer los derechos</h2>
<p>El Titular puede ejercer sus derechos enviando una solicitud por escrito a:</p>
<ul>
  <li><strong>Correo electrónico:</strong> <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a></li>
  <li><strong>Asunto sugerido:</strong> "Ejercicio de derechos – Protección de Datos"</li>
</ul>
<p>La solicitud debe incluir:</p>
<ol>
  <li>Nombre completo y datos de contacto del Titular.</li>
  <li>Elementos razonables que permitan acreditar la identidad del Titular. IFS solo solicitará documentación adicional (como copia simple de documento de identidad) cuando exista duda razonable sobre la identidad, conforme al principio de minimización de datos.</li>
  <li>Derecho que se desea ejercer y descripción clara del pedido.</li>
  <li>Domicilio o medio para recibir la respuesta.</li>
</ol>
<p>IFS responderá dentro de un plazo razonable y, en todo caso, dentro de los plazos máximos exigidos por la normativa aplicable al Titular. A modo orientativo: en Argentina, <strong>diez (10) días corridos</strong> para acceso y <strong>cinco (5) días hábiles</strong> para rectificación o supresión bajo la Ley N° 25.326; en Estados Unidos, hasta <strong>cuarenta y cinco (45) días</strong> bajo la California Consumer Privacy Act y normas estatales equivalentes; en la Unión Europea, <strong>un (1) mes prorrogable</strong> bajo el Reglamento General de Protección de Datos.</p>
<p>El ejercicio de estos derechos es <strong>gratuito</strong>, salvo que la normativa permita el cobro de costos razonables en supuestos de solicitudes manifiestamente infundadas o excesivas.</p>

<h2>15. Menores de edad</h2>
<p>El Sitio y los servicios de IFS están dirigidos a personas mayores de edad conforme a la legislación de su país de residencia. <strong>IFS no recolecta intencionalmente datos personales de menores</strong> sin el consentimiento expreso de sus padres, tutores o representantes legales.</p>
<p>Si un padre, madre, tutor o representante legal toma conocimiento de que un menor ha proporcionado datos personales sin la debida autorización, puede solicitar su supresión a través del correo de contacto.</p>

<h2>16. Seguridad de la información</h2>
<p>IFS implementa medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida, <strong>tales como, en la medida que resulten razonables y aplicables al tamaño y naturaleza de la operación de IFS</strong>:</p>
<ul>
  <li>Conexiones seguras (HTTPS/TLS) en el Sitio.</li>
  <li>Controles de acceso y autenticación a sistemas internos.</li>
  <li>Acuerdos de confidencialidad con colaboradores y proveedores.</li>
  <li>Copias de respaldo periódicas.</li>
  <li>Capacitación del personal en buenas prácticas de seguridad y privacidad.</li>
</ul>
<p>La presente enumeración es <strong>enunciativa y no taxativa</strong>.</p>
<p><strong>Sin embargo, ninguna transmisión por internet o sistema de almacenamiento electrónico es completamente segura.</strong> El Usuario reconoce y acepta que IFS no puede garantizar la seguridad absoluta de la información, por lo que su provisión se realiza bajo su propio riesgo dentro de los estándares razonables del mercado.</p>
<p>En caso de detectarse un incidente de seguridad que afecte significativamente los derechos del Titular, IFS notificará a los Titulares afectados y a las autoridades competentes conforme a la normativa aplicable. En la máxima medida exigida por dicha normativa, la notificación a las autoridades de control se realizará <strong>dentro de las setenta y dos (72) horas</strong> desde que IFS tenga conocimiento del incidente, y la comunicación a los Titulares afectados se efectuará <strong>sin demora indebida</strong>, indicando la naturaleza del incidente, las posibles consecuencias y las medidas adoptadas o propuestas para mitigarlo.</p>

<h2>17. Enlaces y presencia en sitios y plataformas de terceros</h2>

<h3>17.1. Enlaces a sitios externos</h3>
<p>El Sitio puede contener enlaces a sitios de compañías aseguradoras, administradoras, redes sociales y otros terceros. <strong>IFS no se responsabiliza por las prácticas de privacidad ni por el contenido de dichos sitios externos</strong>, los cuales se rigen por sus propias políticas. Recomendamos al Usuario revisar las políticas de privacidad de cada sitio que visite.</p>

<h3>17.2. Presencia institucional en redes sociales</h3>
<p>IFS puede mantener perfiles institucionales en redes sociales tales como Instagram, LinkedIn, Facebook, YouTube, X (Twitter) u otras. Las interacciones del Usuario con dichos perfiles —incluyendo seguimientos, "me gusta", comentarios, mensajes directos, menciones o cualquier otra actividad— se rigen, además de esta Política, por los términos y políticas de privacidad de cada plataforma.</p>
<p><strong>IFS no controla los datos que dichas plataformas recolectan, almacenan o procesan sobre los Usuarios</strong>, ni los algoritmos de personalización, segmentación o publicidad que aplican. Cuando IFS publique contenido en redes sociales o responda a interacciones de Usuarios, lo hará dentro de los límites de esta Política y de las políticas de la plataforma respectiva. La eventual difusión, captura o conservación que realicen terceros del contenido publicado por IFS en redes sociales escapa al control de IFS.</p>

<h2>18. Cambios a esta Política</h2>
<p>IFS se reserva el derecho de modificar esta Política en cualquier momento, especialmente para reflejar cambios normativos, tecnológicos o en sus prácticas de tratamiento. La versión vigente será siempre la publicada en el Sitio, con indicación de la fecha de última actualización.</p>
<p>Cuando los cambios sean <strong>menores o de redacción</strong>, los mismos entrarán en vigencia desde la publicación de la versión actualizada en el Sitio.</p>
<p>Cuando los cambios sean <strong>sustanciales</strong> y afecten derechos del Usuario, finalidades del tratamiento o categorías de datos tratados, IFS <strong>procurará notificarlos con antelación razonable, generalmente no menor a quince (15) días corridos</strong>, a través del Sitio y, cuando corresponda, mediante aviso a las direcciones de correo electrónico registradas. Transcurrido dicho plazo, <strong>el uso continuado del Sitio implicará la aceptación de los cambios</strong>. El Usuario que no esté de acuerdo con las modificaciones podrá cesar el uso del Sitio y solicitar la supresión de sus datos personales conforme a la Sección 14, sin costo alguno.</p>

<h2>19. Ley aplicable y jurisdicción</h2>
<p>IFS comercializa exclusivamente productos de compañías internacionales y no opera en el mercado local argentino regulado por la Superintendencia de Seguros de la Nación. Esta Política se interpretará e aplicará considerando lo siguiente:</p>
<ul>
  <li><strong>Domicilio legal y jurisdicción principal:</strong> Estado de Delaware, Estados Unidos de América.</li>
  <li><strong>Reconocimiento de derechos del Titular según su residencia:</strong> cuando el Titular resida en una jurisdicción cuya normativa imperativa de protección de datos personales le otorgue derechos adicionales (por ejemplo, la Ley N° 25.326 de Argentina, el Reglamento General de Protección de Datos europeo o normas equivalentes), tales derechos se reconocerán y respetarán en lo que resulte aplicable.</li>
</ul>
<p>Para toda controversia derivada de esta Política, el Usuario y IFS se someterán <strong>a los tribunales competentes del domicilio legal de IFS en el Estado de Delaware</strong>, sin perjuicio de los derechos imperativos del Titular para acudir a las autoridades de control y tribunales de su país de residencia cuando la legislación así lo permita.</p>
<p><strong>Resolución amistosa previa.</strong> Antes de iniciar cualquier acción legal contra IFS por cuestiones derivadas de esta Política, el Titular se obliga a presentar reclamo formal por escrito al correo <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a>, conforme al procedimiento establecido en la <strong>Sección 29.1 de los Términos y Condiciones</strong>, debiendo IFS <strong>procurar responder o acusar avance del análisis dentro de los treinta (30) días corridos, sin perjuicio de que la respuesta sustantiva pueda demorar más cuando la complejidad del reclamo lo requiera</strong>. La presentación de este reclamo y el agotamiento del plazo de respuesta son condición previa para iniciar acción judicial, salvo que la legislación imperativa aplicable al Titular no admita esta condición o se trate de medidas cautelares urgentes.</p>

<h2>20. Contacto</h2>
<div class="contacto-box">
  <p><strong>Insurance Financial Solution LLC</strong></p>
  <ul style="margin-top:8px">
    <li>Correo electrónico: <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a></li>
    <li>WhatsApp: +54 9 351 242 3249</li>
    <li>Domicilio legal: 16192 Coastal Highway, Lewes, Delaware 19958, Estados Unidos</li>
    <li>Sitio web: <a href="https://www.broker-ifs.com">www.broker-ifs.com</a></li>
  </ul>
</div>

<p class="nota">Esta Política de Privacidad ha sido elaborada en idioma español. En caso de divergencia con cualquier traducción, prevalecerá la versión en español.</p>
`

export default function PoliticaDePrivacidadPage() {
  return (
    <div
      style={{
        background: "#f0f2f7",
        minHeight: "100vh",
        fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
        color: "#1a1a2e",
        lineHeight: "1.65",
        fontSize: "16px",
      }}
      className="legal-page"
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="legal-header">
        <div className="inner">
          <div className="brand">
            <a href="/">IFS · Insurance Financial Solution</a>
          </div>
          <a href="/" className="back">← Volver al sitio</a>
        </div>
      </header>

      <div
        className="legal-main"
        dangerouslySetInnerHTML={{ __html: mainContent }}
      />

      <footer className="legal-footer">
        <p>© 2026 Insurance Financial Solution LLC · Todos los derechos reservados</p>
        <p style={{ marginTop: "12px" }}>
          <a href="/politica-de-privacidad">Política de Privacidad</a>
          {" · "}
          <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          {" · "}
          <a href="/">Inicio</a>
        </p>
      </footer>
    </div>
  )
}
