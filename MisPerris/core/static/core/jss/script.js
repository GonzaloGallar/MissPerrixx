jQuery.extend(jQuery.easing, {
	easeInOutCubic:
		function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }
});
function ws_shift(k, i, c) {
	var d = jQuery; var h = d(this);
	var b = c.find("li");
	var f = c.find(".ws_list");
	var e = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" };
	var g = d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);
	var a = d("<div>").css(e).css({ display: "none", zIndex: 4 }).appendTo(g);
	var j = d("<div>").css(e).css({ display: "none", zIndex: 3 }).appendTo(g); this.go = function (l, p, n) {
		var m = c.width();
		var o = c.height(); a.append(d(i.get(l)).clone()); j.append(d(i.get(p)).clone()); if (k.responsive < 3) { a.find("img").css("width", "100%"); j.find("img").css("width", "100%") } f.stop(true, true).hide().css({ left: -l + "00%" });
		var q = { left: [{ left: -m }, { left: 0 }], right: [{ left: m }, { left: 0 }], down: [{ top: o }, { top: 0 }], up: [{ top: -o }, { top: 0 }] }[k.direction || ["left", "right", "down", "up"][Math.floor(Math.random() * 4)]];
		if (k.support.transform) { if (q[0].left) { q[0] = { translate: [q[0].left, 0, 0] } } else { q[0] = { translate: [0, q[0].top, 0] } } q[1] = { translate: [0, 0, 0] } } a.show();
		j.show(); wowAnimate(a, q[0], q[1], k.duration, "easeInOutCubic",
			function () { f.show(); a.hide().html(""); j.hide().html(""); h.trigger("effectEnd") }); wowAnimate(j, { scale: 1, translate: [0, 0, 0] }, { scale: 0.5, translate: [0, 0, 0] }, k.duration, "easeInOutCubic")
	}
};
jQuery("#wowslider-container1").wowSlider({
	effect: "shift", prev: "", next: "", duration: 20 * 100, delay: 20 * 100, width: 960, height: 360, autoPlay: true, autoPlayVideo: false, playPause: true, stopOnHover: false, loop:
		false, bullets: 1, caption: true, captionEffect: "parallax", controls: true, controlsThumb: ["img/adoptados/chica/apolo.jpg", "img/adoptados/chica/duque.jpg", "img/adoptados/chica/tom.jpg"], responsive: 2, fullScreen: false, gestures: 2, onBeforeStep: 0, images: 0
});

var RegionesYcomunas = {

	"regiones": [{
		"NombreRegion": "Arica y Parinacota",
		"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
	{
		"NombreRegion": "Tarapaca",
		"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camina", "Colchane", "Huara", "Pica"]
	},
	{
		"NombreRegion": "Antofagasta",
		"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "Maria Elena"]
	},
	{
		"NombreRegion": "Atacama",
		"comunas": ["Copiapo", "Caldera", "Tierra Amarilla", "Chanaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
	{
		"NombreRegion": "Coquimbo",
		"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuna", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbala", "Monte Patria", "Punitaqui", "Rio Hurtado"]
	},
	{
		"NombreRegion": "Valparaiso",
		"comunas": ["Valparaiso", "Casablanca", "Concon", "Juan Fernandez", "Puchuncavi", "Quintero", "Vina del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Maria", "Quilpue", "Limache", "Olmue", "Villa Alemana"]
	},
	{
		"NombreRegion": "Region del Libertador Gral. Bernardo O’Higgins",
		"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Donihue", "Graneros", "Las Cabras", "Machali", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requinoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chepica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
	{
		"NombreRegion": "Region del Maule",
		"comunas": ["Talca", "ConsVtucion", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Rio Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curico", "Hualane", "Licanten", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquen", "Linares", "Colbun", "Longavi", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
	{
		"NombreRegion": "Region del Biobio",
		"comunas": ["Concepcion", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tome", "Hualpen", "Lebu", "Arauco", "Canete", "Contulmo", "Curanilahue", "Los alamos", "Tirua", "Los angeles", "Antuco", "Cabrero", "Laja", "Mulchen", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Barbara", "Tucapel", "Yumbel", "Alto Biobio", "Chillan", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillan Viejo", "El Carmen", "Ninhue", "niquen", "Pemuco", "Pinto", "Portezuelo", "Quillon", "Quirihue", "Ranquil", "San Carlos", "San Fabian", "San Ignacio", "San Nicolas", "Treguaco", "Yungay"]
	},
	{
		"NombreRegion": "Region de la Araucania",
		"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquen", "Pucon", "Saavedra", "Teodoro Schmidt", "Tolten", "Vilcun", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautin", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Puren", "Renaico", "Traiguen", "Victoria",]
	},
	{
		"NombreRegion": "Region de Los Rios",
		"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Mafil", "Mariquina", "Paillaco", "Panguipulli", "La Union", "Futrono", "Lago Ranco", "Rio Bueno"]
	},
	{
		"NombreRegion": "Region de Los Lagos",
		"comunas": ["Puerto Montt", "Calbuco", "Cochamo", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullin", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Velez", "Dalcahue", "Puqueldon", "Queilen", "Quellon", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Rio Negro", "San Juan de la Costa", "San Pablo", "Chaiten", "Futaleufu", "Hualaihue", "Palena"]
	},
	{
		"NombreRegion": "Region Aisen del Gral. Carlos Ibanez del Campo",
		"comunas": ["Coihaique", "Lago Verde", "Aisen", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Rio Ibanez"]
	},
	{
		"NombreRegion": "Region de Magallanes y de la AntarVca Chilena",
		"comunas": ["Punta Arenas", "Laguna Blanca", "Rio Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntarVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
	{
		"NombreRegion": "Region Metropolitana de Santiago",
		"comunas": ["Cerrillos", "Cerro Navia", "Conchali", "El Bosque", "Estacion Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipu", "nunoa", "Pedro Aguirre Cerda", "Penalolen", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquin", "San Miguel", "San Ramon", "Vitacura", "Puente Alto", "Pirque", "San Jose de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhue", "Curacavi", "Maria Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Penaflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione region</option><option value="sin-region">--</option>';
	var htmlComunas = '<option value="sin-region">Seleccione comuna</option><option value="sin-region">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);

	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Region');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('selecciones Comuna');
		} else {  }
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('selecciones Region');
		}
	});

	jQuery('#tip-vivienda').change(function () {
		if (jQuery(this).val() == '0') {
			alert('Elija Un Tipo De Vivienda');
		}
	});

});


