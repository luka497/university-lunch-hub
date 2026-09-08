# Plan de experimento de usabilidad — Casino USM (versión prototipo)

Entregable: un documento de evaluación (`docs/experimento-usabilidad.md` en el proyecto y una copia descargable) con hipótesis, participantes y tareas. No cambia el prototipo; solo lo evalúa.

## 1. Hipótesis a comprobar (4)

- **H1 — Decisión anticipada.** Con el semáforo de disponibilidad, al menos 5 de 6 participantes logran decidir *dónde y qué van a almorzar hoy* sin bajar al comedor, en menos de 60 segundos y sin ayuda.
- **H2 — Distinción de compromisos.** Los participantes distinguen correctamente "estoy suscrito este mes" de "reservé para un día puntual": al pedirles que expliquen qué comprometieron, 5 de 6 lo describen sin confundir ambos bloques.
- **H3 — Liberación de cupo sin perder el beneficio.** Ante el objetivo "mañana no vengo, pero quiero seguir suscrito", 5 de 6 liberan solo ese día y ninguno cancela la suscripción completa.
- **H4 — Conciencia del plazo de corte.** Al terminar la sesión, al menos 5 de 6 recuerdan sin mirar la pantalla que los cambios se hacen hasta las 10:30 hrs.

Cada hipótesis se mide con: éxito/fracaso de la meta, tiempo, número de ayudas pedidas y comentario en voz alta.

## 2. Persona más numerosa

**Funcionario administrativo/docente de jornada completa**, come habitualmente en el casino, usuario intermedio de sistemas (correo, planillas, intranet), revisa la minuta desde su computador de oficina antes de bajar.

## 3. Usuarios participantes (6)

| # | Nombre | Edad | Cargo / Unidad | Sede habitual | Años en la U. | Uso de sistemas | Régimen de almuerzo | Dieta especial |
|---|---|---|---|---|---|---|---|---|
| P1 | Pedro Gonzales | 46 | Analista, Asuntos Docentes | Casa Central | 12 | Intermedio | Suscrito mensual (L-M-J) | No |
| P2 | Marcela Fuentes | 34 | Secretaria de Departamento | Casa Central | 6 | Intermedio | Suscrita semanal | Hipocalórico |
| P3 | Rodrigo Salas | 52 | Docente jornada completa | Edificio P | 20 | Básico-intermedio | Sin suscripción, reserva puntual | Vegetariano |
| P4 | Ignacia Rojas | 29 | Asistente de Finanzas | Casa Central | 3 | Avanzado | Sin suscripción | No |
| P5 | Héctor Muñoz | 58 | Encargado de Mantención | Edificio P | 25 | Básico | Suscrito mensual (L-V) | No |
| P6 | Camila Herrera | 41 | Coordinadora Académica | Edificio P | 9 | Intermedio | Suscrita mensual (M-J-V) | Vegetariana |

Perfil demográfico agregado: 29-58 años, 3 mujeres y 3 hombres, todos con computador de escritorio en oficina, 4 de 6 comen en el casino 3 o más veces por semana, 3 de 6 con requerimiento de menú especial (el grupo más afectado por los quiebres de stock).

## 4. Tareas por participante (2 metas por usuario)

Las tareas se enuncian como metas, no como pasos. Cada participante recibe un escenario con datos concretos.

**Bloque A — participantes suscritos (P1, P2, P5, P6)**
- Tarea A1 (H1, H4): "Son las 9:40 del lunes. Antes de bajar, averigua si alcanzarás el menú que tienes comprometido hoy y qué alternativa te queda si no."
- Tarea A2 (H2, H3): "El jueves tienes reunión fuera y no almorzarás en la universidad, pero quieres seguir suscrito el resto del mes. Deja tu situación resuelta en el sistema."

**Bloque B — participantes sin suscripción (P3, P4)**
- Tarea B1 (H1, H2): "El miércoles quieres almorzar vegetariano en el Edificio P. Deja comprometido tu almuerzo de modo que la cocina lo prepare para ti."
- Tarea B2 (H3, H4): "Cambió tu agenda y no irás el miércoles. Deja el cupo disponible para otra persona y di hasta qué hora podías hacerlo."

**Tarea de cierre para los 6 (H2, H4)**
- "Muéstrame en pantalla todo lo que tienes comprometido esta semana y explícame en qué se diferencian esos compromisos entre sí."

Datos usados: usuario Pedro Gonzales (suscripción mensual L-M-J, menú hipocalórico el lunes), reserva puntual pendiente del miércoles vegetariano en Edificio P, menús de lunes con los tres estados visibles (disponible, por agotar, agotado), corte 10:30 hrs.

## 5. Protocolo de la sesión

- Individual, 20-25 min, computador de escritorio, pensamiento en voz alta.
- Orden: consentimiento breve → 2 tareas del bloque que corresponda → tarea de cierre → 3 preguntas de recuerdo (hora de corte, diferencia suscripción/reserva, confianza en el semáforo).
- Registro por tarea: éxito, tiempo, errores, ayudas, cita textual relevante.
- Para provocar el escenario de quiebre de stock durante H1 se usa el estado inicial de datos del prototipo (lunes ya trae menús "por agotar" y "agotado").

## 6. Detalle técnico

- Se crea `docs/experimento-usabilidad.md` con las secciones anteriores más una plantilla de registro por participante (tabla vacía de resultados).
- Se genera además una copia en `/mnt/documents/` para descargar y adjuntar al informe.
- No se modifica código del prototipo. Si al redactar el protocolo se detecta que un escenario no es reproducible con los datos actuales (por ejemplo, se retiró el panel de simulación de canjes), se deja indicado en el documento como limitación, sin tocar la aplicación.
