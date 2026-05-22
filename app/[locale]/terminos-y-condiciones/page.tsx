import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones | IFS Broker",
  description: "Términos y Condiciones de Uso de IFS - Insurance Financial Solution LLC. Sitio broker-ifs.com",
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
  .destacado{
    background:#fff4d6;
    border-left:4px solid #f59e0b;
    padding:16px 20px;
    margin:24px 0;
    border-radius:0 6px 6px 0;
    font-size:15px;
  }
  .contacto-box{
    background:var(--blanco);border-left:4px solid var(--azul);
    padding:20px 24px;margin:24px 0;border-radius:0 8px 8px 0;
    box-shadow:0 2px 8px rgba(30,27,75,0.05);
  }
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
<h1 class="doc-title">Términos y Condiciones de Uso</h1>
<p class="doc-meta"><strong>Última actualización:</strong> 6 de mayo de 2026 &nbsp;·&nbsp; <strong>Versión:</strong> 1.2</p>

<h2>1. Aceptación de los Términos</h2>
<p>Los presentes Términos y Condiciones de Uso (en adelante, los "Términos") regulan el acceso y la utilización del sitio web <strong>www.broker-ifs.com</strong> (en adelante, el "Sitio"), titularidad de <strong>Insurance Financial Solution LLC</strong> (en adelante, "IFS").</p>
<p>El acceso al Sitio, la navegación, el uso del cotizador, el agendamiento de reuniones, la comunicación con IFS por cualquier medio y, en general, cualquier interacción con el Sitio, <strong>implican la aceptación plena y sin reservas</strong> por parte del usuario (en adelante, el "Usuario") de estos Términos, así como de la <a href="/politica-de-privacidad">Política de Privacidad</a> publicada en el Sitio.</p>
<p><strong>Si el Usuario no acepta los Términos, deberá abstenerse de utilizar el Sitio.</strong></p>

<h2>2. Identificación del Titular del Sitio</h2>
<div class="contacto-box">
  <p><strong>Insurance Financial Solution LLC</strong></p>
  <ul style="margin-top:8px">
    <li>Sociedad constituida bajo las leyes del Estado de Delaware, Estados Unidos de América.</li>
    <li>Domicilio legal: 16192 Coastal Highway, Lewes, Delaware 19958, Sussex County, Estados Unidos.</li>
    <li>Correo electrónico: <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a></li>
    <li>WhatsApp: +54 9 351 242 3249</li>
  </ul>
</div>

<h2>3. Naturaleza del Sitio y de los Servicios</h2>

<h3>3.1. Carácter informativo</h3>
<p>El Sitio tiene <strong>carácter exclusivamente informativo y comercial</strong>. La información publicada se proporciona con fines orientativos y no constituye, en ningún caso:</p>
<ul>
  <li>Una oferta vinculante de productos o servicios.</li>
  <li>Una recomendación personalizada de inversión, seguro o cobertura.</li>
  <li>Asesoramiento financiero, jurídico, tributario, contable, actuarial, médico ni de ningún otro tipo profesional.</li>
  <li>Garantía de aceptación, rentabilidad, cobertura ni resultado alguno.</li>
</ul>

<h3>3.2. Rol de IFS</h3>
<p>IFS actúa <strong>exclusivamente como intermediario o facilitador</strong> entre el Usuario y compañías de seguros, administradoras y plataformas internacionales (en adelante, las "Compañías"), tales como <strong>Best Doctors Insurance, Ole Best e Investors Trust</strong>, entre otras compañías emisoras directas con las que IFS pueda operar en el futuro. Asimismo, los productos pueden contar con respaldo, capacidad de reaseguro o coberturas suscriptas con <strong>reaseguradoras internacionales</strong> como Munich Re, RGA, Partner Re y Swiss Re, sin que ello implique vínculo contractual directo entre dichas reaseguradoras y el Usuario. La mención de cualquier Compañía no implica exclusividad, representación oficial única ni vínculo institucional formal, salvo que se indique expresamente lo contrario.</p>
<p><strong>IFS no emite pólizas, no administra fondos, no asume riesgo asegurador ni de inversión, y no garantiza el cumplimiento por parte de las Compañías de sus obligaciones contractuales.</strong> Cada producto contratado por el Usuario se rige por sus propios términos contractuales con la Compañía emisora correspondiente, conforme a la legislación de su jurisdicción de constitución y operación.</p>

<h3>3.3. IFS no es asegurador ni asesor de inversiones</h3>
<p>IFS no es una compañía de seguros, no es un agente o asesor de inversiones registrado, no es un banco ni una entidad financiera. Cualquier referencia en el Sitio a "soluciones", "productos", "planes" o "coberturas" debe entenderse como información sobre productos disponibles a través de las Compañías con las que IFS opera, y no como productos propios de IFS.</p>

<h3>3.4. IFS no recibe pagos del Usuario</h3>
<p>Los pagos derivados de la contratación de Productos Internacionales se realizan <strong>directa y exclusivamente entre el Usuario y la Compañía emisora correspondiente</strong>. IFS no recibe, custodia, gestiona ni procesa pagos del Usuario, ni a título propio ni a cuenta de las Compañías. Cualquier solicitud o instrucción de pago dirigida a IFS o a sus representantes deberá ser ignorada por el Usuario y carecerá de validez.</p>

<h3>3.5. Comisiones percibidas por IFS</h3>
<p>IFS percibe <strong>comisiones u honorarios de las Compañías</strong> como retribución por su actividad de intermediación. Esta forma de remuneración <strong>no implica costo adicional para el Usuario</strong> respecto del precio que abonaría por el producto contratado directamente con la Compañía. El Usuario reconoce y acepta esta estructura de remuneración, propia del modelo de intermediación en seguros e inversiones internacionales, y podrá solicitar a IFS información general sobre la estructura de comisiones aplicable a un producto antes de su contratación.</p>

<h3>3.6. IFS no ejecuta operaciones por cuenta del Usuario</h3>
<p>IFS facilita la presentación, contacto y seguimiento ante las Compañías, pero <strong>no ejecuta operaciones por cuenta y orden del Usuario</strong>. Toda operación de contratación, modificación, rescate, denuncia de siniestro, cobro de prestaciones o cualquier acto contractual debe ser realizada por el Usuario directamente ante la Compañía emisora correspondiente, conforme a los procedimientos que ésta establezca. La asistencia que IFS pueda brindar en estos procesos tiene carácter informativo y de acompañamiento, sin que ello implique mandato, representación o ejecución por cuenta ajena.</p>

<h2>4. Naturaleza internacional / offshore de los productos</h2>

<h3>4.1. Productos de jurisdicciones extranjeras</h3>
<p>Los productos a los que el Usuario puede acceder a través de IFS son emitidos por Compañías constituidas y reguladas en jurisdicciones distintas de la del Usuario, tales como Estados Unidos, Bermudas, Islas Caimán, Reino Unido, Suiza u otras (en adelante, "Productos Internacionales"). Estos Productos Internacionales:</p>
<ul>
  <li>Se rigen por la legislación, regulación y supervisión de la jurisdicción de constitución y operación de la Compañía emisora correspondiente.</li>
  <li><strong>No están registrados, autorizados ni supervisados</strong> por las autoridades regulatorias del país de residencia del Usuario, salvo indicación expresa en contrario por parte de la Compañía emisora.</li>
  <li>No cuentan con garantías, fondos de respaldo, sistemas de protección de asegurados o inversores, ni mecanismos de resolución de conflictos propios del país de residencia del Usuario.</li>
</ul>

<h3>4.2. Iniciativa del Usuario</h3>
<p>El Usuario declara, reconoce y acepta expresamente que:</p>
<p>a) Accede al Sitio y solicita información sobre Productos Internacionales <strong>por iniciativa propia, libre, voluntaria y sin solicitud o requerimiento previo de IFS</strong> dirigido específicamente a su persona o a residentes de su jurisdicción.</p>
<p>b) IFS <strong>no realiza oferta pública formal</strong> de Productos Internacionales en jurisdicciones donde los mismos no estén registrados o autorizados. Las comunicaciones institucionales y publicitarias de IFS tienen carácter informativo general sobre su actividad como intermediario y los segmentos en los que opera, sin constituir oferta directa de productos específicos. La contratación efectiva de cualquier Producto Internacional requiere iniciativa propia del Usuario y suscripción ante la Compañía emisora correspondiente.</p>
<p>c) El Usuario asume voluntariamente la decisión de explorar, cotizar y, eventualmente, contratar Productos Internacionales con pleno conocimiento de su naturaleza extranjera.</p>
<p>d) Es responsabilidad exclusiva del Usuario verificar si la contratación de Productos Internacionales es compatible con la normativa vigente en su país de residencia, así como con sus circunstancias personales, fiscales y patrimoniales.</p>

<h3>4.3. Cumplimiento tributario, cambiario y declarativo del Usuario</h3>
<p>El Usuario reconoce y acepta que es <strong>única y exclusivamente responsable</strong> del cumplimiento de:</p>
<ul>
  <li>Obligaciones tributarias derivadas de la tenencia, contratación, rescate, beneficio o renta vinculadas a los Productos Internacionales, en su país de residencia o en cualquier otra jurisdicción que corresponda.</li>
  <li>Obligaciones cambiarias y de control de cambios para la transferencia de fondos al exterior y desde el exterior.</li>
  <li>Obligaciones declarativas patrimoniales (regímenes de información de bienes en el exterior, FATCA, CRS u otros).</li>
  <li>Cualquier autorización, registración o trámite que la normativa de su país de residencia exija para contratar Productos Internacionales.</li>
</ul>
<p><strong>IFS no presta asesoramiento tributario ni cambiario y no asume responsabilidad alguna por incumplimientos del Usuario en estas materias.</strong> Se recomienda al Usuario consultar con un asesor profesional independiente antes de contratar cualquier Producto Internacional.</p>

<h3>4.4. Capacidad legal del Usuario</h3>
<p>El uso del Sitio y la contratación de Productos Internacionales están reservados a <strong>personas humanas mayores de edad</strong> conforme a la legislación de su país de residencia, con plena capacidad legal para contratar y para asumir obligaciones de la naturaleza de las descritas en estos Términos. El Usuario declara, al utilizar el Sitio, <strong>cumplir con dichos requisitos</strong> y asume toda responsabilidad por la veracidad de tal declaración. IFS podrá, a su criterio, requerir documentación que acredite la identidad y capacidad del Usuario, especialmente en instancias de contratación efectiva.</p>

<h2>5. El Cotizador y demás herramientas del Sitio</h2>

<h3>5.1. Carácter orientativo</h3>
<p>El cotizador disponible en el Sitio y cualquier otra calculadora, simulador o herramienta similar (en adelante, las "Herramientas") proporcionan <strong>estimaciones meramente referenciales</strong>, calculadas sobre la base de los datos ingresados por el Usuario y de parámetros generales de las Compañías.</p>
<p>Las cifras, primas, sumas aseguradas, rendimientos proyectados o cualquier otro resultado generado por las Herramientas:</p>
<ul>
  <li><strong>No constituyen una oferta</strong>, propuesta vinculante ni compromiso por parte de IFS ni de las Compañías.</li>
  <li>Pueden diferir, en forma significativa, de los valores efectivos que la Compañía emisora cotice formalmente luego de la evaluación completa del riesgo, antecedentes médicos, financieros y demás información requerida.</li>
  <li>Están sujetas a aceptación, suscripción, evaluación de riesgo (underwriting), exámenes médicos, verificación documental y demás procesos propios de cada Compañía.</li>
  <li>Pueden modificarse en cualquier momento sin previo aviso por cambios en los productos, parámetros actuariales, normativa o políticas de las Compañías.</li>
</ul>

<h3>5.2. Datos ingresados por el Usuario</h3>
<p>La precisión y veracidad de los datos ingresados en las Herramientas son responsabilidad exclusiva del Usuario. IFS no verifica los datos ingresados al momento de la cotización, y cualquier inexactitud, omisión o falsedad puede invalidar la estimación o, eventualmente, la contratación posterior con la Compañía emisora.</p>

<h3>5.3. Documentación contractual con las Compañías</h3>
<p>Antes de la contratación efectiva de cualquier Producto Internacional, el Usuario recibirá directamente de la Compañía emisora la <strong>documentación precontractual</strong> exigida por la legislación aplicable a dicha Compañía, incluyendo, según corresponda, condiciones generales y particulares, costos, plazos, exclusiones, derechos de revocación, alcances de cobertura y demás información relevante. <strong>Es responsabilidad exclusiva del Usuario leer, comprender y conservar dicha documentación antes de prestar su consentimiento contractual.</strong> IFS recomienda expresamente no firmar ningún documento sin haberlo leído íntegramente.</p>
<p>Los documentos contractuales con las Compañías pueden estar redactados en <strong>idiomas distintos del español</strong> (frecuentemente, inglés). El Usuario reconoce esta circunstancia y asume la responsabilidad de comprender el contenido de dichos documentos antes de su suscripción, pudiendo solicitar traducciones, asistencia profesional independiente o aclaraciones a la Compañía emisora.</p>

<h2>6. Agendamiento de reuniones y comunicaciones</h2>

<h3>6.1. Calendly y otros canales</h3>
<p>El Sitio puede integrar herramientas de terceros para agendar reuniones (Calendly), así como ofrecer canales de comunicación directos (correo electrónico, WhatsApp, telefónico). El uso de estos canales se rige también por los términos y políticas de los proveedores correspondientes.</p>

<h3>6.2. Comunicaciones por WhatsApp, correo o llamadas</h3>
<p>Las comunicaciones mantenidas con IFS por WhatsApp, correo electrónico, teléfono o cualquier otro canal <strong>tienen carácter informativo y comercial</strong>, y no constituyen, por sí solas, asesoramiento profesional ni vínculo contractual alguno con IFS o con las Compañías. Toda contratación efectiva de un producto requiere la suscripción del documento contractual correspondiente con la Compañía emisora.</p>

<h3>6.3. Registro y conservación de comunicaciones</h3>
<p>IFS podrá <strong>registrar, conservar y archivar</strong> las comunicaciones mantenidas con el Usuario por cualquier canal —incluyendo correos electrónicos, mensajes de WhatsApp, registros de llamadas, notas de reuniones presenciales o virtuales y, con consentimiento previo del Usuario, grabaciones de audio o video— con fines de cumplimiento regulatorio, calidad de servicio, evidencia probatoria, atención de consultas posteriores y prevención de fraude. La conservación de estas comunicaciones se realizará conforme a la <a href="/politica-de-privacidad">Política de Privacidad</a> publicada en el Sitio.</p>

<h2>7. Productos de seguros de personas y salud</h2>

<h3>7.1. Información médica y suscripción</h3>
<p>Los productos de seguro de vida y salud requieren, por parte del Usuario, la entrega de información médica veraz, completa y actualizada, así como la realización de exámenes y evaluaciones que las Compañías determinen. La omisión o falsedad de información médica puede ser causa de:</p>
<ul>
  <li>Rechazo de la solicitud.</li>
  <li>Modificación de las condiciones (primas, exclusiones, recargos).</li>
  <li>Anulación de la cobertura por reticencia o falsedad.</li>
  <li>Rechazo total o parcial de siniestros.</li>
</ul>

<h3>7.2. No es asesoramiento médico</h3>
<p>La información publicada en el Sitio en relación con coberturas, prestaciones, redes médicas, tratamientos o condiciones de salud <strong>no constituye asesoramiento médico</strong>. El Usuario debe consultar con profesionales de la salud para cualquier decisión vinculada a su salud, y con la Compañía emisora para los detalles concretos de su cobertura.</p>

<h2>8. Productos de inversión, ahorro y retiro</h2>

<h3>8.1. Riesgos inherentes</h3>
<p>Los productos de inversión, ahorro o retiro disponibles a través de las Compañías presentan riesgos financieros que el Usuario debe comprender y aceptar antes de contratarlos. Sin que la enumeración sea taxativa, dichos riesgos incluyen:</p>
<ul>
  <li><strong>Riesgo de pérdida total o parcial del capital invertido.</strong></li>
  <li><strong>Riesgo de mercado</strong> (variaciones en valores de activos subyacentes).</li>
  <li><strong>Riesgo de tipo de cambio.</strong></li>
  <li><strong>Riesgo de liquidez</strong> (penalidades por rescate anticipado, plazos mínimos).</li>
  <li><strong>Riesgo de crédito</strong> del emisor o de la entidad subyacente.</li>
  <li><strong>Riesgo regulatorio y soberano</strong> de la jurisdicción de la Compañía.</li>
  <li><strong>Riesgo fiscal</strong> ante cambios normativos.</li>
</ul>

<h3>8.2. Rendimientos pasados y proyecciones</h3>
<div class="destacado"><strong>El rendimiento pasado de un producto, fondo o estrategia no constituye garantía ni indicador del rendimiento futuro.</strong> Cualquier proyección, simulación o ejemplo de evolución de capital o renta presentado en el Sitio o en comunicaciones de IFS es <strong>meramente ilustrativo</strong>, basado en supuestos que pueden no verificarse, y no implica garantía ni compromiso de resultados.</div>

<h3>8.3. Decisión informada del Usuario</h3>
<p>El Usuario reconoce que la contratación de productos de inversión es una decisión personal e informada, basada en su propia evaluación de objetivos financieros, perfil de riesgo, horizonte de inversión y situación patrimonial. Se recomienda obtener asesoramiento financiero independiente antes de contratar.</p>

<h2>9. Información publicada en el Sitio</h2>

<h3>9.1. Mejores esfuerzos, sin garantía de exactitud</h3>
<p>IFS publica la información del Sitio realizando esfuerzos razonables por mantenerla actualizada y exacta. Sin embargo, IFS <strong>no garantiza la exactitud, integridad, vigencia, idoneidad o ausencia de errores</strong> de la información publicada.</p>

<h3>9.2. Sujeción a cambios</h3>
<p>Los productos, condiciones, primas, planes, redes y demás contenidos pueden modificarse en cualquier momento, sin previo aviso, por decisión de las Compañías o de IFS. La información vigente al momento de la contratación efectiva es la contenida en el documento contractual emitido por la Compañía correspondiente.</p>

<h3>9.3. Contenido del blog y materiales educativos</h3>
<p>Los artículos, guías, infografías, videos y demás contenidos educativos publicados en el Sitio son materiales de divulgación general. <strong>No constituyen asesoramiento personalizado</strong>, no toman en consideración las circunstancias particulares de ningún Usuario y no deben ser tomados como base exclusiva para decisiones financieras, de seguros o de salud.</p>

<h2>10. Propiedad Intelectual</h2>

<h3>10.1. Contenido de IFS</h3>
<p>Todo el contenido del Sitio (textos, gráficos, logos, iconos, imágenes, audios, videos, software, bases de datos, código fuente, diseños, estructura, "look and feel", marcas y signos distintivos de IFS) es propiedad de IFS o de sus licenciantes, y se encuentra protegido por las leyes de propiedad intelectual aplicables.</p>

<h3>10.2. Licencia limitada de uso</h3>
<p>IFS otorga al Usuario una licencia limitada, no exclusiva, no transferible y revocable para acceder al Sitio y utilizar sus contenidos exclusivamente para fines personales, no comerciales, de información sobre los productos disponibles. Queda expresamente prohibido, sin autorización previa, expresa y por escrito de IFS:</p>
<ul>
  <li>Reproducir, distribuir, modificar, traducir, adaptar, publicar o transmitir total o parcialmente el contenido.</li>
  <li>Realizar ingeniería inversa, descompilar o extraer datos del Sitio mediante scraping, bots o herramientas similares.</li>
  <li>Utilizar el contenido del Sitio para el <strong>entrenamiento, fine-tuning, indexación o cualquier otra forma de alimentación de modelos de inteligencia artificial generativa</strong>, sin autorización previa, expresa y por escrito de IFS.</li>
  <li>Utilizar el contenido con fines comerciales propios o de terceros.</li>
  <li>Suprimir, alterar u ocultar cualquier nota de derechos de autor o marca.</li>
</ul>

<h3>10.3. Marcas de terceros</h3>
<p>Las marcas, denominaciones y logos de las Compañías y de cualquier otro tercero mencionados en el Sitio son propiedad de sus respectivos titulares y se utilizan únicamente con fines identificatorios e informativos.</p>

<h2>11. Conducta del Usuario</h2>
<p>El Usuario se obliga a utilizar el Sitio conforme a la ley, la moral y las buenas costumbres, y a abstenerse de:</p>
<ol type="a">
  <li>Suministrar datos falsos, inexactos o pertenecientes a terceros sin autorización.</li>
  <li>Realizar conductas que vulneren derechos de IFS, de las Compañías o de terceros.</li>
  <li>Introducir o difundir virus, malware, gusanos, troyanos o cualquier otro elemento dañino.</li>
  <li>Realizar accesos no autorizados, ataques de denegación de servicio, intentos de vulnerar la seguridad o cualquier otra acción que afecte el funcionamiento del Sitio.</li>
  <li>Suplantar la identidad de terceros, incluido personal de IFS o de las Compañías.</li>
  <li>Utilizar el Sitio para fines fraudulentos, de lavado de activos, financiamiento del terrorismo o cualquier otra finalidad ilícita.</li>
  <li>Recolectar datos de otros usuarios o de IFS por medios automatizados o no autorizados.</li>
</ol>

<h2>12. Disponibilidad del Sitio</h2>
<p>IFS realiza esfuerzos razonables por mantener el Sitio disponible y operativo, pero <strong>no garantiza su disponibilidad continua, ininterrumpida ni libre de errores</strong>. El Sitio puede experimentar interrupciones por mantenimiento, actualizaciones, fallas técnicas, problemas de proveedores, eventos de fuerza mayor o cualquier otra causa, sin que ello genere responsabilidad alguna para IFS.</p>

<h2>13. Exclusión de garantías</h2>
<div class="destacado">EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEGISLACIÓN APLICABLE, EL SITIO Y SUS CONTENIDOS, HERRAMIENTAS Y SERVICIOS SE PROPORCIONAN <strong>"TAL CUAL" ("AS IS") Y "SEGÚN DISPONIBILIDAD" ("AS AVAILABLE")</strong>, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA.</div>

<h2>14. Limitación de responsabilidad</h2>

<h3>14.1. Limitación general</h3>
<p>EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEGISLACIÓN APLICABLE, IFS, SUS DIRECTORES, SOCIOS, EMPLEADOS, REPRESENTANTES, AGENTES Y PROVEEDORES <strong>NO SERÁN RESPONSABLES</strong> por daños directos, indirectos, incidentales, especiales, consecuentes, punitivos, ejemplares, lucro cesante, pérdida de oportunidad, pérdida de ingresos, pérdida de datos, daño reputacional ni cualquier otro daño, derivados de o relacionados con el acceso, uso o imposibilidad de uso del Sitio, las herramientas, cotizaciones, simulaciones o contenidos publicados, o decisiones tomadas por el Usuario basadas en información del Sitio.</p>

<h3>14.2. Tope de responsabilidad</h3>
<p>En el supuesto de que IFS resulte responsable frente al Usuario por cualquier causa, <strong>la responsabilidad total y agregada de IFS quedará limitada al mayor</strong> de los siguientes montos: (a) mil dólares estadounidenses (USD 1.000), o (b) el monto que IFS haya percibido de las Compañías en concepto de comisiones derivadas de la operación específica del Usuario durante los doce (12) meses anteriores al hecho generador.</p>

<h3>14.3. Asunción del riesgo</h3>
<div class="destacado"><strong>EL USUARIO RECONOCE Y ACEPTA QUE UTILIZA EL SITIO Y CONTRATA PRODUCTOS A TRAVÉS DE LAS COMPAÑÍAS BAJO SU EXCLUSIVA CUENTA Y RIESGO</strong>, y que IFS no es garante, codeudor solidario ni asegurador de las Compañías ni de los productos.</div>

<h2>15. Indemnidad</h2>
<p>El Usuario se obliga a <strong>mantener indemne y a indemnizar</strong> a IFS, sus directores, socios, empleados, representantes, agentes y proveedores, frente a cualquier reclamo, demanda, acción, procedimiento, sanción, multa, daño, perjuicio, costo o gasto (incluidos honorarios profesionales razonables) derivados de o relacionados con el uso del Sitio en violación de estos Términos, la provisión de información falsa por parte del Usuario, o el incumplimiento de obligaciones tributarias, cambiarias o regulatorias en su jurisdicción.</p>

<h2>16. Modificaciones de los Términos</h2>
<p>IFS se reserva el derecho de modificar estos Términos en cualquier momento. La versión vigente será siempre la publicada en el Sitio, con indicación de la fecha de última actualización. Cuando los cambios sean <strong>sustanciales</strong>, IFS <strong>procurará notificarlos con antelación razonable, generalmente no menor a quince (15) días corridos</strong>. El uso continuado del Sitio implicará la aceptación de los Términos modificados.</p>

<h2>17. Privacidad y datos personales</h2>
<p>El tratamiento de los datos personales del Usuario se rige por la <a href="/politica-de-privacidad">Política de Privacidad</a> publicada en el Sitio, que forma parte integrante de estos Términos. Al aceptar estos Términos, el Usuario declara haber leído, comprendido y aceptado dicha Política.</p>

<h2>18. Fuerza mayor</h2>
<p>IFS no será responsable por incumplimientos o demoras en el funcionamiento del Sitio debido a eventos de fuerza mayor o caso fortuito, incluyendo desastres naturales, pandemias, guerras, actos de terrorismo, fallas generalizadas de internet, cortes de energía, decisiones gubernamentales, ataques cibernéticos, o cualquier otra causa fuera del control razonable de IFS.</p>

<h2>19. Independencia de las cláusulas</h2>
<p>Si cualquier disposición de estos Términos fuera declarada inválida, ilegal o inejecutable, dicha disposición se considerará separable, y las restantes disposiciones continuarán en plena vigencia y efecto.</p>

<h2>20. Acuerdo total</h2>
<p>Estos Términos, junto con la <a href="/politica-de-privacidad">Política de Privacidad</a> y cualquier otro documento expresamente referenciado, constituyen el acuerdo total entre el Usuario e IFS respecto del uso del Sitio.</p>

<h2>21. Jurisdicción y resolución de controversias</h2>

<h3>21.1. Resolución amistosa previa</h3>
<p>Antes de iniciar cualquier acción legal contra IFS, el Usuario se obliga a presentar su <strong>reclamo formal por escrito</strong> al correo <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a>. IFS <strong>procurará responder o acusar avance del análisis dentro de los treinta (30) días corridos</strong> desde su recepción.</p>

<h3>21.2. Jurisdicción principal</h3>
<p>Toda controversia derivada de o relacionada con el Sitio o estos Términos se someterá a la <strong>jurisdicción exclusiva de los tribunales competentes del Estado de Delaware, Estados Unidos de América</strong>, con renuncia expresa del Usuario a cualquier otro fuero o jurisdicción que pudiera corresponderle, sin perjuicio de los derechos imperativos e irrenunciables que la legislación de defensa del consumidor del país de residencia del Usuario pudiera otorgarle.</p>

<h2>22. Aceptación expresa</h2>
<div class="destacado">AL ACCEDER, NAVEGAR O UTILIZAR EL SITIO, AL UTILIZAR EL COTIZADOR, AL AGENDAR UNA REUNIÓN, AL COMPLETAR FORMULARIOS O AL COMUNICARSE CON IFS POR CUALQUIER CANAL, EL USUARIO <strong>DECLARA Y RECONOCE EXPRESAMENTE</strong>:
<ol type="a" style="margin-top:12px">
  <li>Haber leído íntegramente los presentes Términos y Condiciones y la Política de Privacidad.</li>
  <li>Comprender el contenido y los alcances de ambos documentos.</li>
  <li>Aceptar todas y cada una de sus disposiciones, en forma libre, voluntaria, informada y sin reservas.</li>
  <li>Reconocer que IFS actúa exclusivamente como intermediario de Compañías internacionales, no como asegurador, asesor financiero registrado, banco ni entidad regulada en su jurisdicción.</li>
  <li>Asumir, bajo su exclusiva responsabilidad, las consecuencias legales, tributarias, cambiarias y patrimoniales de la contratación de Productos Internacionales.</li>
</ol></div>

<h2>23. Contacto</h2>
<div class="contacto-box">
  <p><strong>Insurance Financial Solution LLC</strong></p>
  <ul style="margin-top:8px">
    <li>Correo electrónico: <a href="mailto:administracion@ifs-broker.com">administracion@ifs-broker.com</a></li>
    <li>WhatsApp: +54 9 351 242 3249</li>
    <li>Domicilio legal: 16192 Coastal Highway, Lewes, Delaware 19958, Estados Unidos</li>
    <li>Sitio web: <a href="https://www.broker-ifs.com">www.broker-ifs.com</a></li>
  </ul>
</div>

<p class="nota">Estos Términos y Condiciones han sido elaborados en idioma español. En caso de divergencia con cualquier traducción, prevalecerá la versión en español.</p>
`

export default function TerminosYCondicionesPage() {
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
