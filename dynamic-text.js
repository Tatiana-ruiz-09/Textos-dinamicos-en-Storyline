/*
=========================================================
 IMPLEMENTACIÓN TEXTOS DINÁMICOS STORYLINE
=========================================================
 Este script consulta un webhook (n8n) que obtiene datos
 desde Google Sheets y asigna dinámicamente variables
 en Storyline.
=========================================================
*/

if (!window.isDefine) {

	window.isDefine = true;

	/*
	=========================================
	OBTENER VARIABLES CONFIGURADAS EN STORYLINE
	=========================================
	*/

	const sheetId = getVar("sheet_id");
	const sheetName = getVar("sheet_name");

	/*
	=========================================
	WEBHOOK N8N
	=========================================
	*/

	const enlace = "https://autoeg.egteamdev.entrenese.com/webhook/b25f6b41-7edd-4c41-afb0-6bd3b0ac6851";

	const webhookURL = `${enlace}?id_sheet=${sheetId}&sheet_name=${sheetName}`;

	console.log("URL generada:", webhookURL);

	/*
	=========================================
	INDICADOR DE CARGA
	=========================================
	*/

	setVar("cargando", true);

	/*
	=========================================
	PETICIÓN AL WEBHOOK
	=========================================
	*/

	fetch(webhookURL, {
		method: "POST",
		redirect: "follow"
	})
	.then(response => response.json())
	.then(datos => {

		const data = Array.isArray(datos) ? datos[0] : datos;

		let contador = 0;

		/*
		=========================================
		RECORRIDO DINÁMICO
		=========================================
		Estructura esperada:
		data[escena][slide][texto]
		*/

		Object.keys(data).forEach(scene => {

			Object.keys(data[scene]).forEach(slide => {

				Object.keys(data[scene][slide]).forEach(texto => {

					const nombreVar = `S${scene}S${slide}T${texto}`;
					const valor = data[scene][slide][texto];

					setVar(nombreVar, valor);
					contador++;

				});

			});

		});

		console.log("Variables asignadas:", contador);

	})
	.catch(error => {
		console.error("Error en carga dinámica:", error);
	});
}
