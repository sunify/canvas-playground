parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"CLMb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../drawers/ice")),r=t(require("../dot"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return i(e)||a(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}var u=[[5.0675675675675675,4.881450488145049],[6.756756756756757,4.881450488145049],[8.445945945945946,5.857740585774058],[9.29054054054054,5.857740585774058],[10.97972972972973,6.834030683403068],[12.66891891891892,6.834030683403068],[13.513513513513514,6.834030683403068],[15.202702702702704,6.834030683403068],[16.89189189189189,7.810320781032078],[17.736486486486484,7.810320781032078],[18.58108108108108,7.810320781032078],[19.425675675675674,7.810320781032078],[20.27027027027027,7.810320781032078],[20.27027027027027,7.810320781032078],[21.114864864864863,7.810320781032078],[21.95945945945946,7.810320781032078],[22.804054054054053,7.810320781032078],[23.64864864864865,7.810320781032078],[24.493243243243242,7.810320781032078],[24.493243243243242,7.810320781032078],[26.18243243243243,7.810320781032078],[26.18243243243243,8.786610878661088],[27.027027027027028,8.786610878661088],[27.87162162162162,8.786610878661088],[28.716216216216218,8.786610878661088],[30.405405405405407,8.786610878661088],[31.25,8.786610878661088],[32.09459459459459,8.786610878661088],[32.939189189189186,9.762900976290098],[34.62837837837838,9.762900976290098],[35.47297297297297,9.762900976290098],[37.16216216216216,9.762900976290098],[38.85135135135135,9.762900976290098],[40.54054054054054,9.762900976290098],[42.229729729729726,9.762900976290098],[43.91891891891892,9.762900976290098],[44.763513513513516,9.762900976290098],[46.4527027027027,9.762900976290098],[48.141891891891895,9.762900976290098],[48.986486486486484,9.762900976290098],[50.67567567567568,9.762900976290098],[53.20945945945946,9.762900976290098],[54.054054054054056,9.762900976290098],[54.89864864864865,9.762900976290098],[56.58783783783784,9.762900976290098],[58.27702702702703,9.762900976290098],[59.12162162162162,9.762900976290098],[60.810810810810814,9.762900976290098],[61.65540540540541,9.762900976290098],[63.3445945945946,9.762900976290098],[65.03378378378379,9.762900976290098],[66.72297297297297,9.762900976290098],[67.56756756756756,9.762900976290098],[68.41216216216216,9.762900976290098],[70.10135135135135,9.762900976290098],[70.94594594594594,9.762900976290098],[72.63513513513513,9.762900976290098],[74.32432432432432,9.762900976290098],[76.01351351351352,9.762900976290098],[76.85810810810811,9.762900976290098],[78.5472972972973,9.762900976290098],[79.39189189189189,9.762900976290098],[80.23648648648648,9.762900976290098],[81.92567567567568,9.762900976290098],[82.77027027027027,9.762900976290098],[83.61486486486487,9.762900976290098],[85.30405405405406,9.762900976290098],[86.14864864864865,9.762900976290098],[86.99324324324324,9.762900976290098],[88.68243243243244,8.786610878661088],[90.37162162162163,8.786610878661088],[92.06081081081082,8.786610878661088],[93.75,7.810320781032078],[94.5945945945946,7.810320781032078],[96.28378378378379,7.810320781032078],[98.81756756756756,6.834030683403068],[100.50675675675676,6.834030683403068],[102.19594594594594,6.834030683403068],[105.57432432432432,5.857740585774058],[107.26351351351352,5.857740585774058],[108.9527027027027,5.857740585774058],[111.48648648648648,5.857740585774058],[113.17567567567568,5.857740585774058],[114.86486486486487,5.857740585774058],[116.55405405405406,5.857740585774058],[117.39864864864865,5.857740585774058],[118.24324324324324,5.857740585774058],[119.93243243243244,5.857740585774058],[120.77702702702703,5.857740585774058],[122.46621621621621,5.857740585774058],[123.31081081081082,5.857740585774058],[125,5.857740585774058],[126.6891891891892,5.857740585774058],[128.37837837837836,6.834030683403068],[130.06756756756758,6.834030683403068],[131.75675675675674,7.810320781032078],[133.44594594594594,8.786610878661088],[134.29054054054055,8.786610878661088],[135.97972972972974,9.762900976290098],[136.82432432432432,9.762900976290098],[138.51351351351352,9.762900976290098],[139.35810810810813,9.762900976290098],[141.0472972972973,10.739191073919107],[142.73648648648648,10.739191073919107],[143.5810810810811,10.739191073919107],[145.27027027027026,10.739191073919107],[145.27027027027026,10.739191073919107],[146.11486486486487,10.739191073919107],[148.64864864864865,10.739191073919107],[152.02702702702703,9.762900976290098],[153.71621621621622,9.762900976290098],[157.0945945945946,8.786610878661088],[161.31756756756758,8.786610878661088],[164.69594594594594,7.810320781032078],[168.07432432432432,7.810320781032078],[171.4527027027027,6.834030683403068],[173.98648648648648,6.834030683403068],[176.52027027027026,6.834030683403068],[178.20945945945945,6.834030683403068],[180.74324324324326,6.834030683403068],[182.43243243243242,6.834030683403068],[185.8108108108108,5.857740585774058],[187.5,5.857740585774058],[189.1891891891892,5.857740585774058],[190.87837837837836,5.857740585774058],[191.72297297297297,5.857740585774058],[193.41216216216216,5.857740585774058],[194.25675675675674,5.857740585774058],[195.94594594594594,5.857740585774058],[197.63513513513513,5.857740585774058],[199.32432432432432,5.857740585774058],[201.85810810810813,5.857740585774058],[203.5472972972973,5.857740585774058],[206.0810810810811,5.857740585774058],[207.77027027027026,5.857740585774058],[210.30405405405406,4.881450488145049],[212.83783783783784,4.881450488145049],[214.52702702702703,4.881450488145049],[217.0608108108108,4.881450488145049],[218.75,4.881450488145049],[220.4391891891892,4.881450488145049],[222.12837837837836,4.881450488145049],[223.81756756756758,4.881450488145049],[226.35135135135135,4.881450488145049],[228.04054054054055,4.881450488145049],[228.88513513513513,4.881450488145049],[231.4189189189189,4.881450488145049],[233.10810810810813,4.881450488145049],[234.7972972972973,4.881450488145049],[236.48648648648648,5.857740585774058],[237.3310810810811,5.857740585774058],[239.02027027027026,5.857740585774058],[240.70945945945945,5.857740585774058],[242.39864864864865,6.834030683403068],[244.93243243243242,6.834030683403068],[247.46621621621622,7.810320781032078],[249.1554054054054,7.810320781032078],[252.53378378378378,8.786610878661088],[254.22297297297297,8.786610878661088],[255.91216216216216,9.762900976290098],[257.60135135135135,9.762900976290098],[259.2905405405405,9.762900976290098],[260.97972972972974,10.739191073919107],[262.6689189189189,10.739191073919107],[265.2027027027027,10.739191073919107],[266.8918918918919,10.739191073919107],[268.5810810810811,11.715481171548117],[271.9594594594595,11.715481171548117],[273.64864864864865,11.715481171548117],[275.3378378378378,11.715481171548117],[277.8716216216216,11.715481171548117],[279.5608108108108,11.715481171548117],[281.25,11.715481171548117],[282.9391891891892,11.715481171548117],[283.78378378378375,11.715481171548117],[285.47297297297297,11.715481171548117],[287.1621621621622,11.715481171548117],[288.0067567567567,11.715481171548117],[289.69594594594594,11.715481171548117],[293.9189189189189,11.715481171548117],[298.9864864864865,11.715481171548117],[303.2094594594595,10.739191073919107],[307.43243243243245,10.739191073919107],[311.6554054054054,10.739191073919107],[315.03378378378375,9.762900976290098],[317.56756756756755,9.762900976290098],[320.10135135135135,9.762900976290098],[322.63513513513516,9.762900976290098],[325.1689189189189,9.762900976290098],[327.7027027027027,9.762900976290098],[330.2364864864865,8.786610878661088],[331.9256756756757,8.786610878661088],[334.4594594594595,8.786610878661088],[336.9932432432433,8.786610878661088],[340.3716216216216,7.810320781032078],[342.0608108108108,7.810320781032078],[344.5945945945946,7.810320781032078],[346.28378378378375,6.834030683403068],[348.81756756756755,6.834030683403068],[350.5067567567567,6.834030683403068],[353.0405405405405,6.834030683403068],[354.72972972972974,6.834030683403068],[358.1081081081081,6.834030683403068],[359.7972972972973,6.834030683403068],[361.4864864864865,6.834030683403068],[363.1756756756757,6.834030683403068],[365.7094594594595,6.834030683403068],[368.2432432432433,6.834030683403068],[369.93243243243245,6.834030683403068],[372.46621621621625,6.834030683403068],[375,6.834030683403068],[378.3783783783784,6.834030683403068],[383.44594594594594,6.834030683403068],[387.6689189189189,7.810320781032078],[390.2027027027027,7.810320781032078],[394.4256756756757,8.786610878661088],[399.4932432432433,9.762900976290098],[402.8716216216216,10.739191073919107],[406.25,11.715481171548117],[409.6283783783784,12.691771269177126],[412.1621621621622,12.691771269177126],[413.85135135135135,13.668061366806135],[415.5405405405405,13.668061366806135],[417.22972972972974,13.668061366806135],[419.7635135135135,13.668061366806135],[425.6756756756757,13.668061366806135],[430.7432432432433,11.715481171548117],[434.1216216216216,11.715481171548117],[437.5,10.739191073919107],[441.72297297297297,9.762900976290098],[445.10135135135135,8.786610878661088],[447.63513513513516,8.786610878661088],[451.0135135135135,7.810320781032078],[453.5472972972973,7.810320781032078],[456.9256756756757,7.810320781032078],[459.4594594594595,6.834030683403068],[461.9932432432433,6.834030683403068],[464.52702702702703,6.834030683403068],[467.0608108108108,6.834030683403068],[470.4391891891892,6.834030683403068],[473.81756756756755,5.857740585774058],[476.35135135135135,5.857740585774058],[479.72972972972974,3.905160390516039],[482.2635135135135,3.905160390516039],[485.6418918918919,3.905160390516039],[487.3310810810811,3.905160390516039],[489.86486486486484,3.905160390516039],[492.39864864864865,3.905160390516039],[494.93243243243245,3.905160390516039],[497.46621621621625,3.905160390516039],[500,3.905160390516039],[503.3783783783784,3.905160390516039],[506.7567567567568,3.905160390516039],[508.44594594594594,3.905160390516039],[512.668918918919,3.905160390516039],[516.8918918918919,5.857740585774058],[521.1148648648649,7.810320781032078],[525.3378378378378,9.762900976290098],[530.4054054054054,11.715481171548117],[534.6283783783784,14.644351464435147],[538.0067567567568,15.620641562064156],[541.3851351351351,16.596931659693166],[543.0743243243244,16.596931659693166],[545.6081081081081,16.596931659693166],[550.6756756756756,16.596931659693166],[554.8986486486486,15.620641562064156],[560.8108108108108,14.644351464435147],[567.5675675675675,13.668061366806135],[574.3243243243244,11.715481171548117],[580.2364864864866,9.762900976290098],[585.3040540540541,9.762900976290098],[591.2162162162163,9.762900976290098],[595.4391891891892,9.762900976290098],[599.6621621621622,9.762900976290098],[603.8851351351351,8.786610878661088],[608.1081081081081,8.786610878661088],[611.4864864864866,8.786610878661088],[614.0202702702703,8.786610878661088],[618.2432432432432,8.786610878661088],[620.777027027027,8.786610878661088],[623.3108108108108,8.786610878661088],[626.6891891891892,8.786610878661088],[630.9121621621622,8.786610878661088],[635.9797297297297,7.810320781032078],[640.2027027027027,7.810320781032078],[646.1148648648649,7.810320781032078],[652.8716216216216,7.810320781032078],[657.9391891891892,7.810320781032078],[661.3175675675675,7.810320781032078],[668.918918918919,7.810320781032078],[673.1418918918919,7.810320781032078],[677.3648648648649,7.810320781032078],[680.7432432432432,7.810320781032078],[684.1216216216216,7.810320781032078],[685.8108108108108,7.810320781032078],[689.1891891891892,7.810320781032078],[694.2567567567568,6.834030683403068],[706.081081081081,3.905160390516039],[717.0608108108108,0],[728.8851351351351,-1.9525801952580195],[742.3986486486486,-4.881450488145049],[755.9121621621622,-7.810320781032078],[767.7364864864866,-8.786610878661088],[773.6486486486486,-9.762900976290098],[780.4054054054054,-9.762900976290098],[782.9391891891892,-9.762900976290098],[783.7837837837837,-9.762900976290098],[787.1621621621622,-9.762900976290098],[790.5405405405405,-8.786610878661088],[793.918918918919,-7.810320781032078],[798.1418918918919,-6.834030683403068],[802.3648648648649,-5.857740585774058],[807.4324324324325,-4.881450488145049],[812.5,-3.905160390516039],[817.5675675675675,-3.905160390516039],[823.4797297297297,-3.905160390516039],[827.7027027027027,-3.905160390516039],[831.081081081081,-2.928870292887029],[834.4594594594595,-1.9525801952580195],[836.9932432432432,-1.9525801952580195],[839.527027027027,-.9762900976290098],[841.2162162162163,0],[842.9054054054054,0],[844.5945945945946,0],[847.972972972973,0],[849.6621621621622,.9762900976290098],[851.3513513513514,.9762900976290098],[853.0405405405405,1.9525801952580195],[854.7297297297297,2.928870292887029],[855.5743243243244,2.928870292887029],[857.2635135135134,3.905160390516039],[859.7972972972973,3.905160390516039],[861.4864864864866,5.857740585774058],[863.1756756756756,5.857740585774058],[864.0202702702703,5.857740585774058],[865.7094594594595,5.857740585774058],[866.5540540540541,5.857740585774058],[868.2432432432432,5.857740585774058],[869.9324324324325,5.857740585774058],[872.4662162162163,5.857740585774058],[874.1554054054054,5.857740585774058],[875,5.857740585774058],[876.6891891891892,5.857740585774058],[878.3783783783784,5.857740585774058],[880.9121621621622,5.857740585774058],[883.4459459459459,5.857740585774058],[887.668918918919,3.905160390516039],[890.2027027027027,3.905160390516039],[894.4256756756756,2.928870292887029],[900.3378378378378,1.9525801952580195],[905.4054054054054,.9762900976290098],[909.6283783783784,.9762900976290098],[913.0067567567568,.9762900976290098],[914.6959459459459,.9762900976290098],[916.3851351351351,.9762900976290098],[918.918918918919,.9762900976290098],[923.1418918918919,.9762900976290098],[928.2094594594595,.9762900976290098],[935.8108108108108,.9762900976290098],[942.5675675675675,.9762900976290098],[948.4797297297297,.9762900976290098],[953.5472972972973,.9762900976290098],[957.7702702702703,.9762900976290098],[961.9932432432432,.9762900976290098],[965.3716216216216,1.9525801952580195],[967.9054054054054,1.9525801952580195],[971.2837837837837,1.9525801952580195],[973.8175675675675,1.9525801952580195],[977.1959459459459,1.9525801952580195],[980.5743243243244,2.928870292887029],[983.1081081081081,2.928870292887029],[984.7972972972973,2.928870292887029],[987.331081081081,2.928870292887029],[989.8648648648649,3.905160390516039],[991.5540540540541,4.881450488145049],[993.2432432432432,5.857740585774058],[994.0878378378378,6.834030683403068],[994.9324324324325,7.810320781032078],[995.777027027027,7.810320781032078],[996.6216216216216,8.786610878661088],[996.6216216216216,9.762900976290098],[997.4662162162163,9.762900976290098],[997.4662162162163,10.739191073919107],[997.4662162162163,11.715481171548117],[997.4662162162163,12.691771269177126],[997.4662162162163,13.668061366806135],[8.445945945945946,688.2845188284518],[8.445945945945946,689.2608089260809],[8.445945945945946,690.2370990237099],[8.445945945945946,691.2133891213389],[8.445945945945946,692.1896792189679],[8.445945945945946,693.1659693165969],[9.29054054054054,693.1659693165969],[10.135135135135135,693.1659693165969],[10.97972972972973,693.1659693165969],[12.66891891891892,693.1659693165969],[16.047297297297295,693.1659693165969],[19.425675675675674,693.1659693165969],[21.95945945945946,693.1659693165969],[24.493243243243242,695.118549511855],[28.716216216216218,695.118549511855],[32.09459459459459,695.118549511855],[37.16216216216216,695.118549511855],[42.229729729729726,695.118549511855],[47.2972972972973,695.118549511855],[51.520270270270274,693.1659693165969],[55.74324324324324,691.2133891213389],[59.12162162162162,689.2608089260809],[59.96621621621622,689.2608089260809],[63.3445945945946,689.2608089260809],[67.56756756756756,689.2608089260809],[70.94594594594594,689.2608089260809],[74.32432432432432,690.2370990237099],[79.39189189189189,691.2133891213389],[82.77027027027027,692.1896792189679],[86.99324324324324,692.1896792189679],[92.9054054054054,693.1659693165969],[95.43918918918918,693.1659693165969],[98.81756756756756,694.1422594142259],[101.35135135135135,694.1422594142259],[104.72972972972973,694.1422594142259],[106.41891891891892,694.1422594142259],[108.9527027027027,695.118549511855],[111.48648648648648,695.118549511855],[114.02027027027027,695.118549511855],[116.55405405405406,695.118549511855],[118.24324324324324,695.118549511855],[119.93243243243244,695.118549511855],[121.62162162162163,695.118549511855],[124.1554054054054,695.118549511855],[125.8445945945946,695.118549511855],[127.53378378378378,695.118549511855],[130.91216216216216,694.1422594142259],[131.75675675675674,694.1422594142259],[135.13513513513513,694.1422594142259],[140.2027027027027,694.1422594142259],[144.42567567567568,694.1422594142259],[148.64864864864865,695.118549511855],[153.71621621621622,695.118549511855],[157.0945945945946,696.094839609484],[161.31756756756758,696.094839609484],[165.54054054054055,696.094839609484],[167.22972972972974,696.094839609484],[168.07432432432432,696.094839609484],[169.76351351351352,696.094839609484],[170.60810810810813,696.094839609484],[170.60810810810813,696.094839609484],[171.4527027027027,696.094839609484],[172.2972972972973,696.094839609484],[173.14189189189187,696.094839609484],[176.52027027027026,696.094839609484],[179.89864864864865,696.094839609484],[185.8108108108108,696.094839609484],[194.25675675675674,696.094839609484],[201.01351351351352,696.094839609484],[211.14864864864865,696.094839609484],[219.5945945945946,696.094839609484],[227.19594594594594,696.094839609484],[232.26351351351352,696.094839609484],[237.3310810810811,696.094839609484],[241.55405405405406,696.094839609484],[244.08783783783784,696.094839609484],[246.62162162162164,696.094839609484],[248.3108108108108,696.094839609484],[250,696.094839609484],[251.6891891891892,696.094839609484],[252.53378378378378,696.094839609484],[257.60135135135135,695.118549511855],[264.3581081081081,694.1422594142259],[272.80405405405406,692.1896792189679],[282.0945945945946,691.2133891213389],[289.69594594594594,690.2370990237099],[297.2972972972973,690.2370990237099],[304.05405405405406,690.2370990237099],[311.6554054054054,690.2370990237099],[319.2567567567567,690.2370990237099],[325.1689189189189,690.2370990237099],[330.2364864864865,690.2370990237099],[333.61486486486484,690.2370990237099],[336.9932432432433,690.2370990237099],[339.52702702702703,689.2608089260809],[340.3716216216216,689.2608089260809],[346.28378378378375,689.2608089260809],[351.35135135135135,689.2608089260809],[356.4189189189189,689.2608089260809],[362.3310810810811,689.2608089260809],[369.93243243243245,689.2608089260809],[374.1554054054054,689.2608089260809],[379.22297297297297,690.2370990237099],[384.2905405405405,691.2133891213389],[389.3581081081081,692.1896792189679],[394.4256756756757,694.1422594142259],[396.9594594594595,694.1422594142259],[399.4932432432433,695.118549511855],[401.18243243243245,695.118549511855],[402.8716216216216,695.118549511855],[403.71621621621625,695.118549511855],[405.4054054054054,695.118549511855],[420.6081081081081,692.1896792189679],[431.5878378378378,690.2370990237099],[445.10135135135135,688.2845188284518],[456.9256756756757,687.3082287308229],[467.0608108108108,687.3082287308229],[474.6621621621622,687.3082287308229],[480.5743243243243,687.3082287308229],[483.9527027027027,687.3082287308229],[486.4864864864865,687.3082287308229],[491.55405405405406,687.3082287308229],[499.1554054054054,687.3082287308229],[510.1351351351351,687.3082287308229],[522.8040540540541,687.3082287308229],[532.9391891891892,687.3082287308229],[539.6959459459459,687.3082287308229],[546.4527027027027,687.3082287308229],[551.5202702702703,687.3082287308229],[556.5878378378378,687.3082287308229],[559.1216216216216,687.3082287308229],[565.8783783783784,687.3082287308229],[575.168918918919,687.3082287308229],[589.527027027027,686.3319386331938],[602.1959459459459,685.3556485355649],[613.1756756756756,684.3793584379359],[619.0878378378378,684.3793584379359],[625.8445945945946,684.3793584379359],[630.9121621621622,684.3793584379359],[634.2905405405405,683.4030683403068],[635.1351351351351,683.4030683403068],[640.2027027027027,683.4030683403068],[647.8040540540541,683.4030683403068],[660.472972972973,683.4030683403068],[674.831081081081,682.4267782426779],[687.5,682.4267782426779],[698.4797297297297,682.4267782426779],[706.9256756756756,682.4267782426779],[713.6824324324325,682.4267782426779],[719.5945945945946,682.4267782426779],[720.4391891891892,682.4267782426779],[726.3513513513514,682.4267782426779],[733.9527027027027,682.4267782426779],[750.8445945945946,680.4741980474198],[770.2702702702703,680.4741980474198],[782.9391891891892,680.4741980474198],[795.6081081081081,680.4741980474198],[804.0540540540541,680.4741980474198],[811.6554054054054,680.4741980474198],[816.722972972973,680.4741980474198],[819.2567567567568,680.4741980474198],[825.168918918919,680.4741980474198],[833.6148648648649,680.4741980474198],[847.1283783783784,682.4267782426779],[858.9527027027027,684.3793584379359],[869.9324324324325,687.3082287308229],[877.5337837837837,688.2845188284518],[881.7567567567568,690.2370990237099],[887.668918918919,692.1896792189679],[891.0472972972973,693.1659693165969],[893.581081081081,694.1422594142259],[894.4256756756756,694.1422594142259],[897.8040540540541,694.1422594142259],[904.5608108108108,694.1422594142259],[915.5405405405405,694.1422594142259],[927.3648648648649,694.1422594142259],[940.0337837837837,694.1422594142259],[948.4797297297297,695.118549511855],[952.7027027027027,695.118549511855],[958.6148648648649,696.094839609484],[961.9932432432432,696.094839609484],[962.8378378378378,696.094839609484],[965.3716216216216,696.094839609484],[967.0608108108108,696.094839609484],[970.4391891891892,696.094839609484],[972.972972972973,696.094839609484],[976.3513513513514,697.071129707113],[981.418918918919,698.0474198047419],[984.7972972972973,699.023709902371],[988.1756756756756,700],[991.5540540540541,701.952580195258],[994.0878378378378,702.928870292887],[994.9324324324325,703.905160390516],[996.6216216216216,703.905160390516],[996.6216216216216,704.8814504881451],[998.3108108108108,705.857740585774],[999.1554054054054,705.857740585774],[1000.8445945945945,705.857740585774],[1001.6891891891893,705.857740585774],[1001.6891891891893,706.8340306834031],[1002.5337837837837,706.8340306834031],[1003.3783783783783,706.8340306834031],[1004.222972972973,704.8814504881451],[1004.222972972973,703.905160390516],[1005.0675675675675,703.905160390516],[1005.9121621621621,702.928870292887],[1006.7567567567568,702.928870292887],[1006.7567567567568,701.952580195258],[1007.6013513513514,701.952580195258],[1008.445945945946,701.952580195258],[1009.2905405405405,701.952580195258],[1010.1351351351351,701.952580195258],[1010.9797297297298,701.952580195258],[1010.1351351351351,701.952580195258],[1009.2905405405405,701.952580195258],[992.4433249370277,68.34030683403068],[992.4433249370277,66.38772663877266],[994.1225860621327,63.458856345885636],[994.9622166246851,61.50627615062761],[994.9622166246851,58.57740585774059],[994.9622166246851,57.60111576011158],[994.9622166246851,55.64853556485355],[994.9622166246851,53.69595536959554],[994.9622166246851,50.767085076708504],[994.9622166246851,48.81450488145049],[994.9622166246851,45.88563458856346],[994.9622166246851,43.93305439330544],[994.9622166246851,41.98047419804742],[994.9622166246851,40.027894002789395],[994.9622166246851,37.09902370990237],[994.9622166246851,36.122733612273365],[994.9622166246851,34.17015341701534],[994.9622166246851,33.19386331938633],[994.9622166246851,31.241283124128312],[994.9622166246851,30.264993026499305],[994.9622166246851,28.312412831241286],[995.8018471872376,27.33612273361227],[995.8018471872376,25.383542538354252],[995.8018471872376,22.454672245467226],[995.8018471872376,20.502092050209207],[995.8018471872376,19.525801952580196],[995.8018471872376,17.573221757322177],[995.8018471872376,16.596931659693166],[995.8018471872376,15.620641562064156],[995.8018471872376,13.668061366806135],[995.8018471872376,12.691771269177126],[995.8018471872376,11.715481171548117],[995.8018471872376,12.691771269177126],[995.8018471872376,13.668061366806135],[995.8018471872376,15.620641562064156],[995.8018471872376,19.525801952580196],[995.8018471872376,25.383542538354252],[995.8018471872376,34.17015341701534],[995.8018471872376,43.93305439330544],[995.8018471872376,52.71966527196653],[995.8018471872376,61.50627615062761],[995.8018471872376,69.31659693165969],[995.8018471872376,76.15062761506276],[995.8018471872376,84.93723849372385],[995.8018471872376,89.8186889818689],[995.8018471872376,95.67642956764296],[995.8018471872376,102.51046025104603],[995.8018471872376,106.41562064156207],[995.8018471872376,112.27336122733612],[995.8018471872376,118.13110181311018],[995.8018471872376,126.91771269177127],[995.8018471872376,133.75174337517433],[995.8018471872376,141.56206415620642],[995.8018471872376,146.44351464435147],[995.8018471872376,152.30125523012552],[994.9622166246851,153.27754532775452],[994.9622166246851,155.23012552301256],[994.9622166246851,159.1352859135286],[994.9622166246851,164.99302649930266],[994.1225860621327,173.77963737796375],[993.2829554995802,182.56624825662485],[993.2829554995802,190.3765690376569],[993.2829554995802,198.186889818689],[992.4433249370277,218.68898186889817],[992.4433249370277,223.57043235704325],[992.4433249370277,228.4518828451883],[992.4433249370277,231.3807531380753],[992.4433249370277,235.28591352859135],[992.4433249370277,238.2147838214784],[992.4433249370277,241.14365411436543],[992.4433249370277,245.04881450488148],[992.4433249370277,249.9302649930265],[993.2829554995802,254.81171548117155],[994.1225860621327,258.7168758716876],[994.9622166246851,272.38493723849376],[996.64147774979,276.2900976290097],[996.64147774979,285.07670850767084],[996.64147774979,291.9107391910739],[996.64147774979,300.697350069735],[995.8018471872376,313.38912133891216],[992.4433249370277,320.22315202231516],[989.9244332493703,322.1757322175732],[988.2451721242653,324.12831241283124],[988.2451721242653,326.08089260808924],[988.2451721242653,331.9386331938633],[988.2451721242653,337.79637377963735],[987.4055415617129,351.4644351464435],[986.5659109991603,365.1324965132497],[986.5659109991603,380.7531380753138],[986.5659109991603,394.42119944212],[986.5659109991603,405.16039051603906],[986.5659109991603,415.89958158995813],[986.5659109991603,423.7099023709903],[986.5659109991603,428.59135285913527],[986.5659109991603,434.44909344490935],[986.5659109991603,439.3305439330544],[986.5659109991603,443.2357043235704],[986.5659109991603,445.1882845188284],[986.5659109991603,446.1645746164575],[986.5659109991603,447.1408647140865],[986.5659109991603,449.0934449093445],[986.5659109991603,452.99860529986057],[986.5659109991603,461.78521617852164],[986.5659109991603,475.4532775453278],[986.5659109991603,490.09762900976295],[986.5659109991603,504.7419804741981],[986.5659109991603,532.0781032078104],[986.5659109991603,541.8410041841004],[986.5659109991603,548.6750348675035],[986.5659109991603,553.5564853556485],[986.5659109991603,556.4853556485356],[986.5659109991603,558.4379358437935],[986.5659109991603,559.4142259414226],[986.5659109991603,563.3193863319386],[986.5659109991603,569.1771269177127],[986.5659109991603,576.9874476987447],[986.5659109991603,583.8214783821478],[986.5659109991603,590.655509065551],[987.4055415617129,596.5132496513249],[988.2451721242653,600.418410041841],[989.0848026868177,606.276150627615],[989.9244332493703,611.15760111576],[990.7640638119227,615.0627615062762],[990.7640638119227,618.9679218967922],[990.7640638119227,622.8730822873082],[990.7640638119227,623.8493723849373],[990.7640638119227,625.8019525801952],[991.6036943744753,626.7782426778243],[991.6036943744753,627.7545327754533],[991.6036943744753,629.7071129707113],[991.6036943744753,630.6834030683403],[992.4433249370277,632.6359832635983],[992.4433249370277,633.6122733612273],[992.4433249370277,635.5648535564853],[992.4433249370277,637.5174337517434],[993.2829554995802,639.4700139470013],[993.2829554995802,641.4225941422594],[993.2829554995802,643.3751743375175],[993.2829554995802,644.3514644351465],[993.2829554995802,646.3040446304044],[993.2829554995802,647.2803347280335],[993.2829554995802,648.2566248256625],[993.2829554995802,649.2329149232916],[993.2829554995802,650.2092050209205],[994.1225860621327,652.1617852161785],[994.1225860621327,654.1143654114366],[994.1225860621327,656.0669456066946],[994.1225860621327,657.0432357043236],[994.1225860621327,658.0195258019526],[994.1225860621327,658.9958158995815],[994.1225860621327,659.9721059972106],[994.1225860621327,660.9483960948396],[994.1225860621327,661.9246861924686],[994.1225860621327,662.9009762900976],[994.1225860621327,663.8772663877266],[994.1225860621327,664.8535564853556],[994.1225860621327,665.8298465829847],[994.1225860621327,668.7587168758716],[994.1225860621327,669.7350069735007],[994.1225860621327,669.7350069735007],[994.1225860621327,670.7112970711297],[994.1225860621327,671.6875871687587],[994.1225860621327,672.6638772663878],[4.198152812762385,10.739191073919107],[4.198152812762385,13.668061366806135],[4.198152812762385,17.573221757322177],[5.037783375314861,23.430962343096233],[5.877413937867338,29.288702928870293],[6.717044500419815,34.17015341701534],[6.717044500419815,39.05160390516039],[7.556675062972292,42.95676429567643],[8.39630562552477,45.88563458856346],[9.235936188077247,49.7907949790795],[10.075566750629722,51.743375174337515],[10.075566750629722,53.69595536959554],[10.915197313182201,55.64853556485355],[11.754827875734676,60.52998605299861],[13.43408900083963,66.38772663877266],[14.273719563392108,72.24546722454673],[15.113350125944583,76.15062761506276],[16.79261125104954,82.98465829846583],[20.151133501259444,97.62900976290098],[21.830394626364402,104.46304044630405],[23.509655751469353,111.2970711297071],[24.349286314021832,116.17852161785216],[26.028547439126783,123.98884239888423],[26.86817800167926,127.89400278940028],[26.86817800167926,135.70432357043236],[26.86817800167926,138.63319386331938],[26.86817800167926,145.46722454672243],[26.86817800167926,147.41980474198047],[26.86817800167926,148.39609483960948],[26.86817800167926,152.30125523012552],[25.188916876574307,158.15899581589957],[23.509655751469353,162.06415620641562],[21.830394626364402,166.94560669456067],[20.990764063811923,169.8744769874477],[18.471872376154494,176.70850767085076],[16.79261125104954,179.6373779637378],[15.113350125944583,181.5899581589958],[14.273719563392108,186.47140864714083],[13.43408900083963,189.40027894002787],[11.754827875734676,196.23430962343096],[10.915197313182201,200.139470013947],[10.915197313182201,202.092050209205],[10.075566750629722,205.02092050209205],[9.235936188077247,206.97350069735006],[9.235936188077247,209.9023709902371],[8.39630562552477,214.78382147838215],[8.39630562552477,216.73640167364016],[8.39630562552477,218.68898186889817],[8.39630562552477,221.6178521617852],[8.39630562552477,222.5941422594142],[8.39630562552477,224.54672245467225],[8.39630562552477,226.49930264993029],[8.39630562552477,229.4281729428173],[8.39630562552477,231.3807531380753],[8.39630562552477,235.28591352859135],[8.39630562552477,236.26220362622036],[8.39630562552477,238.2147838214784],[7.556675062972292,244.07252440725244],[7.556675062972292,250.9065550906555],[6.717044500419815,258.7168758716876],[6.717044500419815,267.50348675034866],[6.717044500419815,274.33751743375177],[6.717044500419815,279.21896792189676],[6.717044500419815,285.07670850767084],[6.717044500419815,291.9107391910739],[6.717044500419815,295.81589958159],[6.717044500419815,300.697350069735],[6.717044500419815,304.60251046025104],[6.717044500419815,307.5313807531381],[6.717044500419815,309.4839609483961],[6.717044500419815,311.4365411436541],[6.717044500419815,312.41283124128313],[6.717044500419815,313.38912133891216],[6.717044500419815,315.34170153417017],[6.717044500419815,320.22315202231516],[6.717044500419815,327.0571827057183],[6.717044500419815,335.84379358437934],[6.717044500419815,345.60669456066944],[6.717044500419815,353.41701534170153],[6.717044500419815,363.1799163179916],[6.717044500419815,370.0139470013947],[6.717044500419815,375.87168758716876],[6.717044500419815,380.7531380753138],[6.717044500419815,383.68200836820085],[6.717044500419815,386.61087866108784],[6.717044500419815,387.5871687587168],[6.717044500419815,393.4449093444909],[5.877413937867338,414.92329149232916],[5.877413937867338,426.63877266387726],[5.877413937867338,436.40167364016736],[5.877413937867338,447.1408647140865],[5.877413937867338,454.9511854951186],[5.877413937867338,467.6429567642957],[7.556675062972292,471.54811715481173],[7.556675062972292,474.4769874476987],[8.39630562552477,477.40585774058576],[9.235936188077247,479.35843793584377],[9.235936188077247,480.3347280334728],[10.075566750629722,480.3347280334728],[10.075566750629722,482.28730822873086],[10.075566750629722,494.97907949790795],[10.075566750629722,502.78940027894004],[9.235936188077247,511.5760111576011],[9.235936188077247,519.3863319386332],[9.235936188077247,529.1492329149232],[9.235936188077247,538.9121338912134],[9.235936188077247,546.7224546722455],[9.235936188077247,552.5801952580194],[9.235936188077247,557.4616457461645],[9.235936188077247,561.3668061366807],[10.075566750629722,565.2719665271967],[10.075566750629722,568.2008368200837],[10.075566750629722,572.1059972105998],[10.915197313182201,575.0348675034867],[10.915197313182201,576.9874476987447],[11.754827875734676,579.9163179916318],[12.594458438287154,582.8451882845188],[12.594458438287154,587.7266387726638],[13.43408900083963,591.63179916318],[14.273719563392108,595.536959553696],[14.273719563392108,599.442119944212],[15.113350125944583,602.370990237099],[15.113350125944583,606.276150627615],[15.113350125944583,609.2050209205021],[15.113350125944583,613.1101813110181],[15.95298068849706,616.0390516039051],[15.95298068849706,618.9679218967922],[15.95298068849706,621.8967921896792],[15.95298068849706,625.8019525801952],[16.79261125104954,628.7308228730823],[16.79261125104954,631.6596931659693],[16.79261125104954,635.5648535564853],[16.79261125104954,640.4463040446303],[16.79261125104954,644.3514644351465],[16.79261125104954,648.2566248256625],[16.79261125104954,651.1854951185495],[16.79261125104954,654.1143654114366],[16.79261125104954,656.0669456066946],[15.95298068849706,658.0195258019526],[15.113350125944583,659.9721059972106],[15.113350125944583,661.9246861924686],[15.113350125944583,664.8535564853556],[15.113350125944583,667.7824267782427],[15.113350125944583,668.7587168758716],[15.113350125944583,671.6875871687587],[15.113350125944583,673.6401673640167],[15.113350125944583,675.5927475592747],[15.113350125944583,676.5690376569038],[15.113350125944583,676.5690376569038],[15.113350125944583,680.4741980474198],[15.113350125944583,682.4267782426779],[15.113350125944583,688.2845188284518],[15.113350125944583,691.2133891213389],[14.273719563392108,695.118549511855]].map(function(e){return r.default.apply(void 0,n(e))}),f={drawer:e.default,dots:u,time:200,offset:5};exports.default=f;
},{"../drawers/ice":"BCIP","../dot":"t3Br"}]},{},[], null)
//# sourceMappingURL=/canvas-playground/frozen.66eee815.map