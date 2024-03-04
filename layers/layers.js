var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_bataskeckabmagelang_1 = new ol.format.GeoJSON();
var features_bataskeckabmagelang_1 = format_bataskeckabmagelang_1.readFeatures(json_bataskeckabmagelang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskeckabmagelang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskeckabmagelang_1.addFeatures(features_bataskeckabmagelang_1);
var lyr_bataskeckabmagelang_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bataskeckabmagelang_1, 
                style: style_bataskeckabmagelang_1,
                popuplayertitle: "batas kec. kab magelang",
                interactive: true,
                title: '<img src="styles/legend/bataskeckabmagelang_1.png" /> batas kec. kab magelang'
            });
var format_jalanKolekterprimer_2 = new ol.format.GeoJSON();
var features_jalanKolekterprimer_2 = format_jalanKolekterprimer_2.readFeatures(json_jalanKolekterprimer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanKolekterprimer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanKolekterprimer_2.addFeatures(features_jalanKolekterprimer_2);
var lyr_jalanKolekterprimer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanKolekterprimer_2, 
                style: style_jalanKolekterprimer_2,
                popuplayertitle: "jalan Kolekter primer",
                interactive: true,
                title: '<img src="styles/legend/jalanKolekterprimer_2.png" /> jalan Kolekter primer'
            });
var format_ArteriPrimer_3 = new ol.format.GeoJSON();
var features_ArteriPrimer_3 = format_ArteriPrimer_3.readFeatures(json_ArteriPrimer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArteriPrimer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArteriPrimer_3.addFeatures(features_ArteriPrimer_3);
var lyr_ArteriPrimer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArteriPrimer_3, 
                style: style_ArteriPrimer_3,
                popuplayertitle: "Arteri Primer",
                interactive: true,
                title: '<img src="styles/legend/ArteriPrimer_3.png" /> Arteri Primer'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_bataskeckabmagelang_1.setVisible(true);lyr_jalanKolekterprimer_2.setVisible(true);lyr_ArteriPrimer_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_bataskeckabmagelang_1,lyr_jalanKolekterprimer_2,lyr_ArteriPrimer_3];
lyr_bataskeckabmagelang_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_jalanKolekterprimer_2.set('fieldAliases', {'Id': 'Id', });
lyr_ArteriPrimer_3.set('fieldAliases', {'Id': 'Id', });
lyr_bataskeckabmagelang_1.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_jalanKolekterprimer_2.set('fieldImages', {'Id': 'Range', });
lyr_ArteriPrimer_3.set('fieldImages', {'Id': 'Range', });
lyr_bataskeckabmagelang_1.set('fieldLabels', {'Kecamatan': 'inline label - visible with data', });
lyr_jalanKolekterprimer_2.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_ArteriPrimer_3.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_ArteriPrimer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});