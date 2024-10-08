var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Administrasi_Malang_1 = new ol.format.GeoJSON();
var features_Administrasi_Malang_1 = format_Administrasi_Malang_1.readFeatures(json_Administrasi_Malang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Malang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Malang_1.addFeatures(features_Administrasi_Malang_1);
var lyr_Administrasi_Malang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Malang_1, 
                style: style_Administrasi_Malang_1,
                popuplayertitle: "Administrasi_Malang",
                interactive: false,
                title: '<img src="styles/legend/Administrasi_Malang_1.png" /> Administrasi_Malang'
            });
var format_jalan_2 = new ol.format.GeoJSON();
var features_jalan_2 = format_jalan_2.readFeatures(json_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_2.addFeatures(features_jalan_2);
var lyr_jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_2, 
                style: style_jalan_2,
                popuplayertitle: "jalan",
                interactive: false,
                title: '<img src="styles/legend/jalan_2.png" /> jalan'
            });
var format_Persebaran_Bengkel_Fixx_3 = new ol.format.GeoJSON();
var features_Persebaran_Bengkel_Fixx_3 = format_Persebaran_Bengkel_Fixx_3.readFeatures(json_Persebaran_Bengkel_Fixx_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Persebaran_Bengkel_Fixx_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persebaran_Bengkel_Fixx_3.addFeatures(features_Persebaran_Bengkel_Fixx_3);
var lyr_Persebaran_Bengkel_Fixx_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Persebaran_Bengkel_Fixx_3, 
                style: style_Persebaran_Bengkel_Fixx_3,
                popuplayertitle: "Persebaran_Bengkel_Fixx",
                interactive: true,
                title: '<img src="styles/legend/Persebaran_Bengkel_Fixx_3.png" /> Persebaran_Bengkel_Fixx'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Administrasi_Malang_1.setVisible(true);lyr_jalan_2.setVisible(true);lyr_Persebaran_Bengkel_Fixx_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Administrasi_Malang_1,lyr_jalan_2,lyr_Persebaran_Bengkel_Fixx_3];
lyr_Administrasi_Malang_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Persebaran_Bengkel_Fixx_3.set('fieldAliases', {'FID_': 'FID_', 'X': 'X', 'Y': 'Y', 'NAMA': 'NAMA', 'RATING': 'RATING', 'JAM_OPERAS': 'JAM_OPERAS', 'NO__TELOPO': 'NO__TELOPO', 'ALAMAT': 'ALAMAT', 'KEL_': 'KEL_', 'KEC_': 'KEC_', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', });
lyr_Administrasi_Malang_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Persebaran_Bengkel_Fixx_3.set('fieldImages', {'FID_': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NAMA': 'TextEdit', 'RATING': 'TextEdit', 'JAM_OPERAS': 'TextEdit', 'NO__TELOPO': 'TextEdit', 'ALAMAT': 'TextEdit', 'KEL_': 'TextEdit', 'KEC_': 'TextEdit', 'KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', });
lyr_Administrasi_Malang_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Persebaran_Bengkel_Fixx_3.set('fieldLabels', {'FID_': 'no label', 'X': 'no label', 'Y': 'no label', 'NAMA': 'no label', 'RATING': 'no label', 'JAM_OPERAS': 'no label', 'NO__TELOPO': 'no label', 'ALAMAT': 'no label', 'KEL_': 'no label', 'KEC_': 'no label', 'KOTA': 'no label', 'PROVINSI': 'no label', });
lyr_Persebaran_Bengkel_Fixx_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});