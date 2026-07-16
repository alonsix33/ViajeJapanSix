# 📕 DOCUMENTO MAESTRO — Viaje Familia Ternero 2026 (Los Ángeles & Japón)

> **Qué es este archivo.** Es el traspaso completo y autocontenido de todo el proyecto. Sirve para (a) retomar la conversación en un chat nuevo sin perder contexto y (b) darle a **Claude Code** todo lo necesario para publicar la app como página web en **GitHub + Netlify**. Guárdalo junto al archivo `viaje_japon_2026.jsx` (la app). Léelo completo antes de continuar.

---

## 0) CÓMO USAR ESTE DOCUMENTO (super-prompt de arranque)

Si estás retomando en un chat nuevo, pega esto como primer mensaje:

> "Adjunto `MAESTRO_viaje_japon_2026.md` y `viaje_japon_2026.jsx`. Este es el traspaso de un proyecto en curso: una app React (JSX de un solo archivo) que es una guía de viaje familiar a Japón/LA con estética goshuincho. Ya trabajamos mucho; el documento maestro tiene todo el contexto, el estado del itinerario, la lógica técnica de la app y los pendientes. Quiero **[lanzar el repo en GitHub y desplegarlo en Netlify / seguir editando el itinerario / etc.]**. Lee el maestro completo antes de responder y confírmame que el estado del `.jsx` coincide con lo descrito en el maestro (sección 6 y 12). Trabajamos en español."

**Reglas de trabajo con este usuario (Alonso):**
- Todo en **español**.
- Ediciones **quirúrgicas**, no reestructuraciones grandes sin pedir. (Una vez se creó un tab de Manila sin pedir y se rechazó.)
- Revisa cambios **incrementalmente** y comparte capturas para verificar antes de finalizar.
- **Verificar con búsqueda web** vuelos/políticas/horarios antes de afirmar.
- Análisis honesto de tradeoffs, sin ser vendedor ni empujar.
- Tono cálido y natural (especialmente en correspondencia en japonés).
- **Validar siempre** el JSX (Babel + render) tras cada edit y copiar a `/mnt/user-data/outputs/`.

---

## 1) RESUMEN DEL PROYECTO

- **Quién:** Familia Ternero, 4 personas, pasaportes peruanos.
- **Qué:** Viaje ~3 semanas (LA + ~12 días Japón + escalas). Verano 2026.
- **Artefacto principal:** app React JSX de un solo archivo (`viaje_japon_2026.jsx`), una "shiori" (cuaderno de viaje) interactiva con estética **goshuincho (御朱印帳)** — cuaderno de sellos de templos.
- **Objetivo inmediato:** convertir la app en **página web pública** (GitHub repo → deploy en Netlify).

### Los viajeros
| Nombre | Documento | Perfil | Notas |
|---|---|---|---|
| **Javier Enrique Ternero Herrera** | 09300928 | TECH (papá) | Vuelo de regreso con millas LATAM Pass; le gustan Marriott/Bonvoy |
| **Martha Julisa Fernandez Maldonado Noriega** ("Julisa"/"Martha"/mamá) | 07870306 | ZEN | Templos, jardines, onsen, calma. NO hace parques temáticos ni el tour JDM |
| **Alonso Javier Ternero Fernandez Maldonado** (el usuario) | 74957866 | TECH + SALIR | Fan de **GTA V** y cultura JDM; arma la app conmigo |
| **Adriel Ternero Fernandez Maldonado** | 62573946 | SALIR | El más joven; Pokémon, arcades |

Email de confirmaciones de vuelos: **anthev@gmail.com**

---

## 2) RUTA COMPLETA CON FECHAS

```
Lima
 → USA: Los Ángeles ............ 23–25 jul 2026
 → Corea: Seúl (escala 17h10) .. 26–27 jul (llegan ICN 27 jul 04:00; pueden salir a la ciudad)
 → Japón:
      Tokio ..................... 27 jul (noche) – 1 ago  (base: Nest Hotel Tokyo Yaesu; noche 27 en Haneda)
      Hakone (ryokan) .......... 1 ago
      Kioto .................... 2 – 5 ago
      Nara (excursión) ......... 4 ago  (vuelven a dormir a Kioto)
      Osaka .................... 5 – 8 ago
 → Filipinas: Manila (escala nocturna ~20h35) .. 8–9 ago
 → USA: Los Ángeles (escala ~7h45) ............. 9 ago
 → Lima ....................................... llegada 10 ago 08:05
```

Ruta **open-jaw**: entran por Tokio (Haneda), salen por Osaka (Kansai/KIX).

---

## 3) VUELOS (detalle completo — 4 tramos, comprados por separado)

> ⚠️ Boletos comprados **por separado** → cada aerolínea tiene su **PNR propio** (distinto de la referencia de la OTA). Sin protección cruzada entre aerolíneas → **contratar seguro de viaje**. Total en efectivo: **USD 13,464.28** + 46,580 millas LATAM Pass. *(Nota: verificado contra la app de vuelos de Alonso el 15 jul — OZ 203 se adelantó a 23:00.)*

### Vuelo 1 — Lima → Los Ángeles
- **LA 2478** (LATAM Airlines Peru), **Jue 23 jul 2026**
- LIM 00:40 → LAX 07:50 (Terminal B) · 9h · Boeing 767 · Economy Light  *(la app de vuelos muestra 00:40)*
- **PNR: FISZIV** · N.º orden LA5447020VZKW
- Equipaje: 1 maleta bodega 23kg (pagada) + carry-on 12kg
- Precio (4 pax): **USD 4,116.58** · tarjeta terminada en 9015

### Vuelo 2 — Los Ángeles → Tokio (vía Seúl)
- Tramo 1: **OZ 203** (Asiana), Sáb 25 jul · **LAX 23:00 → ICN 04:00** (+27 jul) · A350 · Economy  *(⚠️ se adelantó 30 min: antes 23:30→04:30)*
- Escala Seúl (ICN, T2): **17h 10min**
- Tramo 2: **OZ 178** (Asiana), Lun 27 jul · ICN 21:10 → HND 23:30 (Haneda T3) · A330 · Economy
- **PNR Asiana: BV7OJC** · Ref. JustFly (OTA): **296-759-672**
- Precio (4 pax): **USD 2,807.98**

### Vuelo 3 — Osaka → Los Ángeles (vía Manila) ⭐ REACOMODADO
- Tramo 1: **PR 411** (Philippine Airlines), Sáb 8 ago · KIX 15:15 → MNL 18:40 (T1) · A330-300 · Economy Value
- Escala Manila (MNL, T1): **20h 35min** (nocturna)
- Tramo 2: **PR 122** (Philippine Airlines), Dom 9 ago · **MNL 15:15 → LAX 13:45 (+1 día)** · B777-300 · Economy Value
- **PNR: X64MHH** · Precio (4 pax): **USD 4,712.42** (JPY 726,980) · Visa
- **HISTORIA IMPORTANTE:** el tramo original **PR 112** (MNL 11:05 → LAX 09:30) fue **CANCELADO** por la aerolínea. Alonso se auto-reacomodó vía "Self Re-accommodation" al **PR 122** (opción que mantiene la salida KIX 15:15, 1 sola escala, misma aerolínea, y transfería los asientos). PNR y precio sin cambio.
- ⚠️ **PENDIENTE del usuario:** reconfirmar **asientos** en PR 122 y verificar que el **equipaje de bodega** siga incluido.

### Vuelo 4 — Los Ángeles → Lima (2 reservas separadas, mismo vuelo)
- **LA 2477** (LATAM), Dom 9 ago · LAX 21:30 → LIM 08:05 (+10 ago) · B767 · Economy Light
- **Reserva A (Javier, con millas):** PNR **SBPTJN** · orden LA5448818WDCT · asiento 27C · USD 136.80 + **46,580 millas** LATAM Pass · 1 maleta bodega 23kg
- **Reserva B (Alonso, Martha, Adriel):** PNR **CLFHNJ** · orden LA0459482DRQU · USD 1,690.50 · tarjeta terminada en 2419 · 1 maleta bodega (Adulto 1) + carry-on 12kg todos

**Contactos:** LATAM Perú 01 213 8200 / 1-866-435-9526 (EE.UU.) · Asiana flyasiana.com · JustFly justfly.com (ref 296-759-672) · Philippine Airlines philippineairlines.com

**Aprendizaje:** pagos web de LATAM pueden gatillar bloqueos antifraude ante varias compras internacionales grandes seguidas; la app móvil a veces ofrece tarifas más bajas y evita el bloqueo.

---

## 4) ALOJAMIENTOS (los 6 reservados, cancelación gratis salvo nota)

| Ciudad | Hotel | Fechas | Confirmación | PIN | Notas |
|---|---|---|---|---|---|
| Hollywood, LA | **Rodeway Inn near Melrose** (777 N Vine St) | 23-25 jul | 5753225651 | 3599 | Pago al llegar. Caminable al Paseo de la Fama |
| Haneda (llegada) | **Villa Fontaine Grand Haneda** | 27-28 jul | 6167966000 | 1085 | Conectado a la Terminal 3, con onsen. Hab. tatami x4 |
| Tokio | **Nest Hotel Tokyo Yaesu** (Nihonbashi) | 28 jul–1 ago | 6397503665 | 2652 | Recepción 24h, 2 habitaciones |
| Hakone | **Bansuirou Fukuzumi** (ryokan, Yumoto) | 1-2 ago | 5397247010 | 3664 | Cena+desayuno. **Cancela hasta 29 jul** |
| Kioto | **Connect Inn Shichijo-Kamogawa** | 2-5 ago | 5027360565 | 8956 | Apartamento entero, cocina. **Auto check-in** (código llega 15:00). **Impuesto ¥2,400 en efectivo al llegar** |
| Osaka | **Osaka Marriott Miyako** (Tennoji) | 5-8 ago | 5242738937 | 5808 | 5★ encima de estación Tennoji; el Haruka a KIX sale abajo |

### Impuesto de alojamiento de Kioto (宿泊税)
- Se paga **en EFECTIVO al check-in**, aparte de la reserva.
- Connect Inn: ¥54,000 total ÷ 3 noches = ¥18,000/noche ÷ 4 personas = **¥4,500 por persona/noche** → bracket **< ¥6,000 → ¥200 p/persona/noche**.
- **Total: ¥200 × 4 personas × 3 noches = ¥2,400** (~$16).
- Kioto subió el impuesto el **1 marzo 2026**; los brackets que mandó el hotel (¥200/¥400/¥1,000/¥4,000) son los correctos para agosto 2026. Verificado.

### Correspondencia Connect Inn (auto check-in)
El hotel escribió (japonés) confirmando: check-in desde las **15:00**, código de puerta enviado por la plataforma ese día a las 15:00, casillero con llave en la entrada para dejar maletas antes (llamar recepción +81-75-352-8600 si está lleno), no cambian sábanas/toallas (1 set por persona; extra ¥300), check-out 10:00, prohibido fumar, silencio tras 20:00, separar basura y dejarla dentro del cuarto.

**Respuesta final enviada (japonés, tono cálido/relajado, llegada ~1:30-2:30pm, sin exigir):**
```
お世話になっております。アロンソ・テルネロと申します。
ご丁寧なご案内をいただき、誠にありがとうございます。メッセージを確認いたしました。

当日は午後1時半〜2時半頃に施設へ到着する予定です。チェックインは午後3時以降と承知しておりますので、もし準備が整っていない場合でも問題ございません。ゆっくり待たせていただきます。もし可能でしたら、到着時にエントランスのキーロックのお荷物スペースを利用させていただけますと幸いです。

セルフチェックインの方法と鍵番号を当日午後3時にご予約サイトのメッセージでお送りいただける件、また京都市の宿泊税を現金にてお支払いする件も承知いたしました。

お手数をおかけしますが、何卒よろしくお願い申し上げます。滞在を心より楽しみにしております。
アロンソ・テルネロ
```

---

## 5) DOCUMENTOS Y TRÁMITES

- **Visa EE.UU. B1/B2:** los 4 la tienen ✅ (crítico porque transitan LAX dos veces; Perú no está en Visa Waiver). *(Ya no es pendiente — Alonso confirmó que todos tienen visa.)*
- **K-ETA Corea (escala Seúl):** ✅ aplicada para los 4. Números de solicitud:
  - Alonso Javier — **26-LG-10084560**
  - Martha Julisa — **26-NB-10084561**
  - Javier Enrique — **26-SZ-10084563**
  - Adriel — **26-DQ-10084570**
  - (Nota: Perú NO está exento de K-ETA — Chile/Colombia/México sí; Perú no. Menores de 18 y mayores de 65 exentos. Con K-ETA aprobado quedan exentos de la e-Arrival Card.)
- **Japón:** registrar **Visit Japan Web** ~1-2 semanas antes. Pasaportes electrónicos con 6+ meses de vigencia.
- **Filipinas (escala Manila):** registrar **eTravel** dentro de 72h antes del vuelo de regreso. Pasaporte 6+ meses.

---

## 6) ITINERARIO DÍA POR DÍA (ESTADO ACTUAL — fuente de verdad = el JSX)

### 🇺🇸 LOS ÁNGELES (tema **GTA V "Los Santos"** — Alonso es fan del juego)
Mapeo nombre real = nombre en el juego usado en toda la pestaña.

- **Jue 23 jul — Llegada + Paseo de la Fama (Vinewood):** aterrizan LAX 7:50, inmigración ~1.5h, Uber XL al Rodeway Inn (dejan maletas, check-in real 3pm). Tarde: **Paseo de la Fama = Vinewood Boulevard**, estrella de MJ (6927 Hollywood Blvd, frente al Chinese Theatre), Dolby, Ovation (vista del cartel = **Vinewood Sign**), El Capitan. Cena temprano (jet lag).
- **Vie 24 jul — Día Los Santos: costa + mirador (EL DÍA GRANDE):** mediodía **Venice Beach = Vespucci Beach** → **Santa Monica Pier = Del Perro Pier** (caminable por la playa) → **atardecer en Griffith Observatory = Galileo Observatory** (el mirador "sí o sí"; llegar ~1h antes; planetario ~$7).
- **Sáb 25 jul — Rockford Hills + aeropuerto (media jornada):** check-out 11:00 (dejan maletas). **Beverly Hills + Rodeo Drive = Rockford Hills**, con drive-by de la **casa de MJ en Carolwood** (100 N Carolwood Dr — reja privada, solo foto). Opcional The Grove + Farmers Market. **Apple The Grove: recoger el Apple Watch Ultra 3 (refurbished)** — llevar ID + correo 'ready for pickup'. ~18:45 recogen maletas, Uber a **LAX = LSIA**. En LAX (TBIT) ~20:00; **vuelo Asiana a Seúl 23:00 (se adelantó 30 min → estar en LAX ~20:00)**.

**Decisiones LA:** Universal Studios Hollywood **DESCARTADO** (Alonso: "imposible matarnos en un parque temático"). Casa de MJ: todas privadas (Carolwood drive-by es lo único visible; Neverland está a 2-3h y cerrada; tumba en Forest Lawn cerrada al público). Endeavour (California Science Center) fuera de exhibición hasta 13 nov 2026 (después del viaje). Realista: son **~2 días** (día 1 llegan cansados; día 3 media jornada).

### 🇰🇷 ESCALA SEÚL (26-27 jul, 17h10) — pueden salir a la ciudad
Llegan ICN 04:00. Plan sugerido con K-ETA aprobado: ICN T2 → AREX Express a Seoul Station (~51 min, equipaje va directo a Tokio) → desayuno cerca Myeongdong → **Gyeongbokgung** al abrir (9am, cambio de guardia, hanbok) → **Bukchon Hanok** → Insadong → Myeongdong / Torre Namsan → AREX de vuelta → en ICN ~3h antes; OZ 178 a Tokio 21:10.

### 🇯🇵 JAPÓN

**TOKIO (27 jul noche – 1 ago), base Nest Hotel Tokyo Yaesu (Nihonbashi):**
- **Lun 27:** llegan Haneda 23:30 → Villa Fontaine Grand (conectado a T3), a dormir. (Sacar efectivo 7-Bank, IC Welcome Suica, activar eSIM.)
- **Mar 28:** tren al Nest Hotel (~35 min). Tarde: **Shibuya** (cruce, Shibuya Sky, Hachiko, Apple, Nintendo/Pokémon en Parco). Cena izakaya/ramen.
- **Mié 29:** **Akihabara** (Yodobashi Akiba, Super Potato, Mandarake, Pokémon Center, arcades, maid café). Tip: Apple ya no es tax-free; comparar en Yodobashi/BIC.
- **Jue 30:** mañana **Senso-ji** (Asakusa) + **Meiji Jingu**. **Apple Store Ginza** + **Itoya (伊東屋)** en Ginza (12 pisos de papelería, clip rojo, papeles TAKEO 7º piso, café 12º — pura estética goshuincho; entre semana antes de 4pm). Tarde/noche **teamLab** (RESERVAR).
- **Vie 31:** **Tokyo Skytree** + Pokémon Center Skytree Town (alt.: excursión a Kamakura). Enviar maletas grandes a Kioto (takkyubin) para viajar ligeros a Hakone.

**HAKONE (1 ago) — la joya zen:**
- **Sáb 1:** check-out Nest (hasta 11:00). Romancecar desde Shinjuku a Hakone-Yumoto (~85 min). Circuito Hakone (teleférico Owakudani, barco lago Ashi). ~16:00 check-in ryokan **Bansuirou Fukuzumi**: onsen, cena kaiseki, yukata. Madrugada: mejor vista del Fuji.

**KIOTO (2-5 ago), base Connect Inn:**
- **Dom 2:** check-out ryokan. Tren a Odawara + Shinkansen a Kioto (~2h, asiento derecho para ver el Fuji). ~14:00 check-in Connect Inn (auto check-in; **pagar ¥2,400 de impuesto en efectivo**). Atardecer por Gion y el canal Shirakawa.
- **Lun 3:** 7am **Fushimi Inari** (torii, temprano sin gente). **Kiyomizu-dera** + calles Sannenzaka/Ninenzaka. **Ceremonia del té** en machiya (reservar 1-2 semanas antes).
- **Mar 4:** excursión a **Nara** (ciervos, Todai-ji Gran Buda). Alt.: Kinkaku-ji + bambú de Arashiyama.

**OSAKA (5-8 ago), base Osaka Marriott Miyako (Tennoji):**
- **Mié 5:** check-out Connect Inn. JR Special Rapid a Osaka (~30 min). Check-in Marriott. **Pokémon Center Osaka DX** (sin reserva). ⚠️ El Pokémon Café quedó **FULL** todo agosto — NO se logró reservar (ver §9); vigilar cancelaciones. Noche: **Dotonbori** (takoyaki, okonomiyaki, kushikatsu).
- **Jue 6:** **Katsuo-ji (勝尾寺)** — el templo de los Daruma en Minoh (norte). *(Reemplazó a Universal Studios Japan, que se descartó por calor/multitudes/sin Pokémon hasta 2027.)* Traslado: desde Tennoji, **línea Midosuji (roja) directa hasta el final, Minoh-Kayano** (~40-45 min; verificar que el tren llegue hasta Minoh-Kayano) → **Hankyu Bus Nº 30** al templo (~21 min, ¥800 c/u, andén 8) o taxi/Uber (parecido para 4). En el templo: postal en blanco + 6 estaciones de sellos (goshuincho real), recorrido ~1h30. **Bus entre semana cada ~30 min, 9:00-15:00** — ir temprano y chequear último bus de regreso (taxi de respaldo).
- **Vie 7:** Castillo de Osaka (temprano) + Mercado Kuromon + Den Den Town + Shinsekai/Don Quijote.
- **Sáb 8:** check-out Marriott. Haruka Express desde Tennoji a KIX (~50 min). Estar en KIX ~13:00 para PR 411 de las 15:15.

### 🇵🇭 MANILA (escala nocturna 8-9 ago)
Solo escala (no hay tab de Manila — se descartó a propósito; solo aparece como info de vuelo). ~20h35 en el aeropuerto/nocturna, misma terminal T1.

---

## 7) IDEA PENDIENTE DE DECIDIR: Tour JDM nocturno en Tokio 🏎️
Alonso vio en Instagram (**wangandrive.official**, colaboración con **Liberty Walk / Kato-san**) un tour de cultura JDM: subir a autos tuneados (GT-R R34/R35, Silvia, Supra) y cruzar Tokio de noche por la autopista Wangan, Rainbow Bridge, **Daikoku PA** (el car meet más famoso), Tokyo Tower. Estilo Wangan Midnight / Tokyo Drift real.

- **Decisión de Alonso:** "no cambies nada, pero tenlo en mente" → posible **noche del Día 3 (30 jul) o Día 4 (31 jul)** en Tokio.
- **Van 3 personas** (Alonso, Javier, Adriel). **Mamá NO.**
- **Como pasajeros (SIN licencia de conducir)** — así no necesitan Permiso Internacional de Conducir.
- **Operador recomendado:** **Wangun OG** (wangun-og.com) — tours 3h, salen 6pm, recogida en hotel. Buscar el tour "**GTR & JDM Special Experience / Daikoku & Night City**", pedir **VIP Private** para ir solos los 3 (el compartido mete a otros turistas en el auto). También en Klook y GetYourGuide ("Wangun OG Daikoku"). Reservar con anticipación (se llenan en verano).
- (El otro operador, **Wangan Drive / wangandrive.com**, es para *manejar* tú mismo autos Liberty Walk → requiere licencia + IDP Ginebra 1949. No es lo que quieren.)

**Estado:** NO está en la app. Si deciden hacerlo, agregarlo como item nocturno en el Día 3 o 4 de Tokio y dar el link de reserva.

---

## 8) IDEAS OPCIONALES DE ITINERARIO (revisión exploratoria — nada obligatorio)
Del análisis del itinerario (que quedó muy sólido). Solo si hay hueco, sin forzar:
- **Tokio:** **Shinjuku de noche** (Kabukicho, Golden Gai, vista gratis del Tokyo Metropolitan Government Building) — encaja cualquier noche libre.
- **Kioto:** **Arashiyama** (bosque de bambú, Tenryu-ji) — muy ZEN para mamá; ~30 min del centro; podría ir el Día 7 si Nara se ajusta.
- **Osaka:** **Abeno Harukas** (edificio más alto de Japón, mirador) — está prácticamente encima del hotel Marriott en Tennoji; gratis hasta piso 16 o ~¥2,000 al 60.

---

## 9) ⚠️ POKÉMON CAFÉ OSAKA — SITUACIÓN CRÍTICA (probablemente perdido)
- Objetivo original: comer en el **Pokémon Café Osaka** (9º piso Daimaru Shinsaibashi) el **5 de agosto**, con el Pokémon Center DX al lado.
- **Lo que pasó:** la reserva de agosto **NO** siguió la regla de "31 días antes". Abrieron **TODO agosto de una vez el miércoles 1 de julio a las 18:00 JST** (= 04:00 AM Perú). Cuando Alonso revisó (**4 de julio**), **TODO agosto ya estaba 満席 (Full)** — incluyendo el 5 y el 7. No se logró reservar.
- **Planes de respaldo:**
  1. **Vigilar cancelaciones** en reserve.pokemon-cafe.jp (se puede cancelar hasta 22:00 del día previo → se libera el cupo). Revisar los días antes de estar en Osaka.
  2. **Escribir** a pokemon-cafe-osaka-cs@sld-inc.com por lista de espera / nueva ventana.
  3. **Red de seguridad ya asegurada:** el **Pokémon Center Osaka DX** (mismo piso 9, sin reserva) — mercancía, ambiente, fotos con Pikachu.
- **Realismo:** probabilidad de conseguir por cancelación es baja pero no nula (entre semana). No armar el día alrededor de esa esperanza.
- **Pokémon Centers sin reserva ya en el plan:** Shibuya (28 jul), Akihabara (29 jul), Skytree (31 jul), Osaka DX (5 ago). (El Mega Tokyo de Ikebukuro está en remodelación desde 26 mar 2026 — verificar si reabrió.)

---

## 10) ZAPATILLAS / EMPAQUE (consejo dado, acción del usuario)
- Alonso no tiene un par óptimo para Japón (se camina 15-25k pasos/día). Sus opciones actuales (Jordan 3, Nike Overbreak lifestyle, AF1/Kobe moradas, unas recicladas de gym ya gastadas) no son ideales.
- **Recomendación:** comprar **un par nuevo de walking/running con buena amortiguación** (tipo Pegasus/Invincible/Vomero, Ultraboost, Asics Gel, Hoka Clifton), malla transpirable, color que perdone suciedad, **romperlas 2-3 semanas antes** en Lima. Que sean fáciles de quitar/poner (se descalzan en ryokan, templos, el apartamento de Kioto).

---

## 11) PRESUPUESTO (referencia)
| Categoría | Monto | Nota |
|---|---|---|
| Vuelos (ya pagados) | **~$13,464** | + 46,580 millas LATAM Pass |
| Los Ángeles (~2 días) | ~$3,090 | hotel, comida, traslados, compras *(sin Universal — se descartó)* |
| Japón (12 días) | ~$13,700 (rango medio) | hotel, trenes, comida, actividades |
| **Total aprox.** | **~$27,000** para 4 (~$6,750 p/p) | |

**Transporte interno Japón:** NO comprar JR Pass (ya no conviene tras el alza de 2023). Boletos individuales por SmartEX. Traslados que cambian base: Haneda→Tokio (Monorail/Keikyu ~¥500pp), Shinjuku→Hakone (Romancecar ~¥2,470pp, reservar), Hakone→Kioto (Odawara+Shinkansen ~¥12,000pp, reservar), Kioto→Osaka (JR Special Rapid ~¥580pp), Osaka→KIX (Haruka ~¥1,710pp, reservar). Nara ida y vuelta (~¥720pp). Takkyubin para maletas Tokio→Kioto.

---

## 12) 🧩 ARQUITECTURA TÉCNICA DE LA APP (para Claude Code)

**Archivo:** `viaje_japon_2026.jsx` — **un solo archivo**, ~1,320 líneas.

**Stack / dependencias:**
- `import React, { useState, useEffect } from "react";` — **React es la ÚNICA dependencia**. No usa Tailwind, ni librerías externas, ni routing. Todo son **estilos inline** (objetos JS) y **SVG inline**.
- Export: `export default function App()`.
- Estado: `useState` para el tab activo (`"general"` por defecto) y estados locales en algunos componentes (mapas, countdown, stamp grid, checklist).

**Fuentes (dentro de un `<style>` en App):**
- `@import` de Google Fonts: Shippori Mincho, Zen Kaku Gothic New, Zen Maru Gothic, Nanum Myeongjo.
- **`@font-face` de Pricedown EMBEBIDO como base64 WOFF2** (la fuente del logo de GTA, para el banner "LOS SANTOS"). **NO usar CDN** — el CDN (cdnfonts) se bloquea en sandboxes; el base64 embebido es la solución probada. Constante `FONT_GTA = "'Pricedown', 'Zen Kaku Gothic New', sans-serif"`.
- Otras constantes de fuente: `FONT_D` (Shippori Mincho, display), `FONT_B` (Zen Kaku, body), `FONT_R` (Zen Maru), `FONT_KR` (Nanum Myeongjo, coreano).

**Tokens de color:** objeto `C` (sumi, ai, aiDeep, shu, shuSoft, kin, washi, washi2, matcha, sora, sunset, rose, line). Paleta washi/tinta/bermellón (goshuincho).

**Etiquetas de actividad:** objeto `TAGS` = { TECH, ZEN, SALIR, TODOS, COMIDA, TRASLADO, TIP, STAR } cada una con {label, color, bg}. `MTYPE` = tipos de punto de mapa.

**Data arrays (todo el contenido vive aquí — editar estos para cambiar el viaje):**
`TRAVELERS`, `FLIGHTS`, `TRANSFERS`, `MAPS` (la/tokio/kioto/osaka/seul, cada uno con points[] y lines[]), `TRANSPORT_MOVE`, `TRANSPORT_DAYTRIP`, `KETA_STEPS`, `SEOUL_PLAN`, `SEOUL_TRAINS`, `LA_DAYS`, `LA_SPOTS`, `JP_CITIES` (Tokio/Hakone/Kioto/Osaka con days[]→items[]), `STAMPS`, `HOTELS`, `BUDGET`, `CHECKLIST`, `BOOKINGS` (flights/keta/hotels con confirmaciones y PINs), `TABS`.

**Componentes:**
- Decorativos/SVG: `Seal` (hanko), `Taegeuk` (círculo bandera coreana), `WalkStar` (estrella Walk of Fame), `Pokeball`, **`LosSantosBanner`** (banner SVG original: cielo atardecer vice, sol, palmeras, skyline, texto "LOS ÁNGELES / LOS SANTOS" en Pricedown con contorno negro `paint-order:stroke` + sombra, subtítulo "VINEWOOD · VESPUCCI · DEL PERRO"). **Arte 100% original — sin logo/personajes/portada de GTA (IP-safe).**
- UI: `Tag`, `SectionLabel` (acepta `kanjiFont`), `Card`, `Callout`, `MapView` (mapa interactivo con puntos clicables), `DayCard`, `FlightCard`, `HotelCard`, `TransportRow`, `Countdown`, `StampGrid`.
- Tabs (9): `Overview` (general), `Reservas`, `Vuelos`, `LosAngeles` (la), `Seul`, `Japon`, `Hoteles`, `Pokemon`, `Extra` (presupuesto). Mapeados en `App` vía objeto `content[tab]`.
- Patrones SVG de fondo (inline, URL-encoded, blancos ~0.09 opacity): `seigaiha` (olas Japón), `changsal` (celosía hanok Corea), `artDeco` (abanicos Hollywood LA).

**Método de validación (reusar siempre tras editar):**
```bash
# Transpila con Babel y renderiza con react-dom/server para cazar errores runtime
node -e "
const babel=require('@babel/core');const fs=require('fs');
let code=fs.readFileSync('viaje_japon_2026.jsx','utf8');
babel.transformSync(code,{presets:[require('@babel/preset-react'),require('@babel/preset-env')]}); // sintaxis
const out=babel.transformSync(code,{presets:[require('@babel/preset-react'),[require('@babel/preset-env'),{modules:'commonjs'}]]}).code;
fs.writeFileSync('./_t.cjs',out);
const React=require('react'),S=require('react-dom/server'),m=require('./_t.cjs');
console.log('OK', S.renderToString(React.createElement(m.default)).length);
"
```
(Para renderizar un tab individual: agregar `code += '\nexport { LosAngeles as _LA };'` y renderizar `m._LA`.)

**Notas técnicas / gotchas aprendidos:**
- En SVG con React, `paint-order` NO se emite como atributo — ponerlo en el objeto `style` (`paintOrder: "stroke"`), no como prop.
- El render de `App` por defecto solo muestra el tab activo (`general`); para verificar el banner de LA hay que renderizar `LosAngeles` directamente.
- La fuente Pricedown debe ir embebida (base64), no por CDN.

---

## 13) 🚀 PLAN DE DEPLOY: GitHub + Netlify (instrucciones para Claude Code)

La app es un componente React de un archivo, sin librerías externas → deploy trivial con **Vite + React**.

**Pasos:**
1. **Crear proyecto Vite:**
   ```bash
   npm create vite@latest viaje-japon-2026 -- --template react
   cd viaje-japon-2026
   npm install
   ```
2. **Colocar la app:** copiar `viaje_japon_2026.jsx` a `src/App.jsx` (reemplazar el App de ejemplo). El archivo ya hace `export default function App()` — compatible directo.
3. **Limpiar boilerplate:** vaciar/eliminar `src/App.css`; en `src/index.css` dejar solo un reset mínimo (`html,body,#root{margin:0;padding:0;} body{background:#F4EEE2;}`) — el Vite default centra el body con flex y rompe el layout, hay que quitarlo. `src/main.jsx` puede quedar como viene (importa `App` y hace createRoot render); quitar el import de App.css si se eliminó.
4. **Probar local:** `npm run dev` → abrir el localhost y verificar las 9 pestañas + el banner Los Santos con la fuente Pricedown.
5. **Build:** `npm run build` → genera `dist/`.
6. **Git + GitHub:**
   ```bash
   git init && git add -A && git commit -m "Viaje Japón 2026 - guía interactiva"
   # crear repo en GitHub (gh repo create viaje-japon-2026 --public --source=. --push) o manual
   ```
7. **Netlify (2 opciones):**
   - **CLI:** `npm i -g netlify-cli && netlify deploy --prod` (build command `npm run build`, publish dir `dist`).
   - **UI:** conectar el repo de GitHub en Netlify; build command `npm run build`, publish directory `dist`.
8. **Opcional:** agregar `netlify.toml` con redirect SPA (aunque no hay routing, no hace daño):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

**Consideraciones:**
- El `.jsx` pesa ~128KB por el base64 de la fuente Pricedown — normal, no tocar.
- Las Google Fonts cargan por `@import` dentro del `<style>` del componente; funciona en prod. (Opcional: mover a `<link>` en `index.html` para mejor performance.)
- No hay variables de entorno, ni backend, ni llamadas de red (salvo las fonts). Es 100% estático.
- Considerar dominio custom en Netlify si quieren (ej. viajeternero2026.netlify.app).

---

## 14) 📌 EN QUÉ NOS QUEDAMOS / PENDIENTES / PRIORIDADES

### 🔴 URGENTES (fechas que corren)
- [ ] **Reservar los 3 trenes por SmartEX** (Romancecar Shinjuku→Hakone, Shinkansen Hakone→Kioto, Haruka Osaka→KIX) — se abren a inicios de julio (~1 mes antes). *(En el checklist de la app.)*
- [ ] **PR 122 (vuelo de regreso):** reconfirmar **asientos** y verificar **equipaje de bodega** incluido tras la reacomodación.
- [ ] **Apple Watch Ultra 3 (refurbished):** ordenar por internet ~17 jul con recojo en **Apple The Grove**; al recibir "ready for pickup", **llamar a Apple (1-800-MY-APPLE) para extender la retención hasta el 25**. (Unidad única refurbished — asegurarla; ver conversación.)
- [ ] **Pokémon Café:** está **FULL** todo agosto. Decidir: vigilar cancelaciones / escribir al café / conformarse con el Pokémon Center DX. (Ver §9.)
- [ ] **Agregar maletas de bodega** para Julisa y Adriel en los vuelos LATAM (solo tienen carry-on).

### 🟡 PRIORITARIOS (semanas antes)
- [ ] Reservar **entradas: teamLab, Tokyo Skytree, ceremonia del té** en Kioto (1-2 semanas antes).
- [ ] Decidir el **tour JDM** (Wangun OG, noche día 3 o 4 Tokio, 3 personas, VIP privado) y reservar. (Ver §7.)
- [ ] Comprar **eSIM o Pocket WiFi** (cubrir Japón + Corea para la escala).
- [ ] Contratar **seguro de viaje** (vuelos separados = sin protección cruzada).
- [ ] Comprar **zapatillas nuevas de walking** y romperlas antes. (Ver §10.)
- [ ] Esperar/guardar el correo "Approved" del **K-ETA** (ya aplicado).

### 🟢 CERCA DEL VIAJE
- [ ] Registrar **Visit Japan Web** (~1-2 semanas antes).
- [ ] Registrar **eTravel Filipinas** (72h antes del vuelo de regreso).
- [ ] Verificar pasaportes electrónicos, 6+ meses de vigencia.
- [ ] Descargar apps: SmartEX, Google Maps offline, Google Translate japonés, Safety Tips (JNTO).

### 🛠️ PENDIENTES EN LA APP (correcciones)
Ya corregidos en el `.jsx` (8 jul):
- [x] Pokémon Café: corregido en el día de Osaka y en el checklist (agotado / vigilar cancelaciones / Center DX).
- [x] Visa B1/B2: marcada como ✓ (ya no urgente).
- [x] Presupuesto LA: "~2 días", sin "Universal".
- [x] Horario OZ 203 actualizado a 23:00 (escala Seúl 17h10, llegada ICN 04:00); LA 2478 a 00:40; salida de LA ajustada (estar en LAX ~20:00); countdown al 00:40.
- [x] Apple Watch Ultra 3 (refurbished) agregado al Día 3 de LA + Apple Store en el mapa + recordatorio urgente en el checklist.

Aún opcionales (si Alonso confirma):
- [ ] Agregar el **tour JDM** al Día 3/4 de Tokio si lo confirman (ver §7).
- [ ] Agregar **Abeno Harukas / Shinjuku noche / Arashiyama** si deciden incluirlos (ver §8).

### ✅ YA HECHO (para no repetir)
- Reacomodación PR 112→PR 122 aplicada en la app (vuelo, tiempos de escala Manila 20h35 y LAX 7h45, pestaña Reservas).
- Impuesto de Kioto ¥2,400 agregado (día de check-in + pestaña Reservas).
- Itoya agregado al Día 3 de Tokio + mapa.
- Universal Osaka → **Katsuo-ji** (día, mapa, destacados, checklist).
- Universal Hollywood **descartado**; LA reescrito con tema **GTA Los Santos** (nombres del juego en días y mapa).
- **Banner Los Santos** (SVG original) + fuente **Pricedown** embebida (base64) + contorno negro al texto.
- Quitado el card de visa crítica en la pestaña LA; quitado "FAMILIA TERNERO ·" del banner.
- K-ETA aplicada (4 números de solicitud registrados).
- Correspondencia japonesa con Connect Inn enviada.

---

## 15) 🔄 PROMPT PARA ACTUALIZAR / VERIFICAR ESTE MARKDOWN

Pega esto en un chat (adjuntando este `.md` y el `.jsx` más reciente) cada vez que quieras poner al día el documento maestro:

> **"Adjunto el documento maestro `MAESTRO_viaje_japon_2026.md` y la última versión de `viaje_japon_2026.jsx`. Quiero que audites y actualices el maestro para que refleje exactamente el estado real. Haz esto:**
> **1. Lee el `.jsx` completo (los data arrays FLIGHTS, HOTELS, BOOKINGS, LA_DAYS, JP_CITIES, CHECKLIST, BUDGET, etc.) y compáralo contra las secciones 3, 4, 6, 11, 12 y 14 del maestro.**
> **2. Lista toda discrepancia entre el maestro y el `.jsx` (datos que cambiaron, ítems agregados/quitados, fechas, PNRs, confirmaciones).**
> **3. Actualiza el maestro para que coincida con el `.jsx`, y revisa la sección 14 (pendientes): marca lo que ya se hizo, agrega lo nuevo, y re-prioriza urgentes/prioritarios según la fecha de hoy.**
> **4. Si conversamos cosas nuevas en este chat (decisiones, reservas hechas, cambios de plan), incorpóralas al maestro en la sección que corresponda.**
> **5. Devuélveme el `.md` actualizado como archivo, y al final un resumen en viñetas de qué cambiaste. No cambies el estilo ni la estructura del documento, solo el contenido desactualizado.**
> **Trabajamos en español. Si algo del `.jsx` contradice el maestro, gana el `.jsx` (es la fuente de verdad del estado de la app), salvo los 'pendientes en la app' que son cosas aún por corregir."**

---

*Documento maestro generado para el traspaso. Fuente de verdad del estado de la app = `viaje_japon_2026.jsx`. Fuente de verdad de vuelos/reservas = confirmaciones de las aerolíneas y hoteles. Última actualización: 15 jul 2026 (sincronizado con el `.jsx` tras cambios de vuelo OZ 203, Apple Watch, y correcciones de Pokémon Café/visa/presupuesto).*
