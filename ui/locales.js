/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This file is auto-generated. DO NOT EDIT THIS FILE. If you need to:
//   - change which locales are in this file, update "build/locales.json"
//   - change an entry for a specific locale, update "build/locales.json"
//   - change anything else, update "build/generate-locales.py".
//
// To regenerate this file, run "build/generate-locales.py".
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

goog.provide('shaka.ui.Locales');
goog.provide('shaka.ui.Locales.Ids');
goog.require('shaka.ui.Localization');

/**
 * Insert all localization data for the UI into |localization|. This should be
 * done BEFORE any listeners are added to the localization system (to avoid
 * callbacks for each insert) and should be done BEFORE changing to the initial
 * preferred locale (reduces the work needed to update the internal state after
 * each insert).
 *
 * @param {!shaka.ui.Localization} localization
 */

shaka.ui.Locales.apply = function(localization) {
  localization.insert('ar', new Map([
    ['1050953507607739202', 'الحجم'],
    ['1077325112364709655', 'رجوع'],
    ['1142734805932039923', 'إرجاع'],
    ['1774834209035716827', 'تقديم سريع'],
    ['1911090580951495029', 'الترجمة'],
    ['2023925063728908356', 'إلغاء كتم الصوت'],
    ['298626259350585300', 'غير معروفة'],
    ['3045980486001972586', 'مباشر'],
    ['3278592358864783064', 'اللغة'],
    ['4259064532355692191', 'تلقائي'],
    ['4388316720828367903', 'إعدادات إضافية'],
    ['5553522235935533682', 'شريط تمرير البحث'],
    ['5963689277976480680', 'كتم الصوت'],
    ['6161306839322897077', 'إنهاء وضع ملء الشاشة'],
    ['7071612439610534706', 'إرسال...'],
    ['8145129506114534451', 'إيقاف'],
    ['8345190086337560158', 'ملء الشاشة'],
    ['836055097473758014', 'تشغيل'],
    ['9042260521669277115', 'إيقاف مؤقت'],
  ]));
  localization.insert('de', new Map([
    ['1050953507607739202', 'Lautstärke'],
    ['1077325112364709655', 'Zurück'],
    ['1142734805932039923', 'Zurückspulen'],
    ['1774834209035716827', 'Vorspulen'],
    ['1911090580951495029', 'Untertitel'],
    ['2023925063728908356', 'Stummschaltung aufheben'],
    ['298626259350585300', 'Unbekannt'],
    ['3045980486001972586', 'Live'],
    ['3278592358864783064', 'Sprache'],
    ['411375375680850814', 'Nicht zutreffend'],
    ['4259064532355692191', 'Automatisch'],
    ['4388316720828367903', 'Weitere Einstellungen'],
    ['5553522235935533682', 'Schieberegler für Suche'],
    ['5963689277976480680', 'Stummschalten'],
    ['6073266792045231479', 'Auflösung'],
    ['6161306839322897077', 'Vollbildmodus beenden'],
    ['7071612439610534706', 'Streamen…'],
    ['8145129506114534451', 'Aus'],
    ['8345190086337560158', 'Vollbild'],
    ['836055097473758014', 'Wiedergeben'],
    ['9042260521669277115', 'Pausieren'],
  ]));
  localization.insert('en', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Back'],
    ['1142734805932039923', 'Rewind'],
    ['1774834209035716827', 'Fast-forward'],
    ['1911090580951495029', 'Captions'],
    ['2023925063728908356', 'Unmute'],
    ['298626259350585300', 'Unknown'],
    ['3045980486001972586', 'Live'],
    ['3278592358864783064', 'Language'],
    ['411375375680850814', 'N/A'],
    ['4259064532355692191', 'Auto'],
    ['4388316720828367903', 'More settings'],
    ['5553522235935533682', 'Seek slider'],
    ['5963689277976480680', 'Mute'],
    ['6073266792045231479', 'Resolution'],
    ['6161306839322897077', 'Exit full screen'],
    ['7071612439610534706', 'Cast...'],
    ['8145129506114534451', 'Off'],
    ['8345190086337560158', 'Full screen'],
    ['836055097473758014', 'Play'],
    ['9042260521669277115', 'Pause'],
  ]));
  localization.insert('en-GB', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Back'],
    ['1142734805932039923', 'Rewind'],
    ['1774834209035716827', 'Fast-forward'],
    ['1911090580951495029', 'Captions'],
    ['2023925063728908356', 'Unmute'],
    ['298626259350585300', 'Unknown'],
    ['3045980486001972586', 'Live'],
    ['3278592358864783064', 'Language'],
    ['4259064532355692191', 'Auto'],
    ['4388316720828367903', 'More settings'],
    ['5553522235935533682', 'Seek slider'],
    ['5963689277976480680', 'Mute'],
    ['6073266792045231479', 'Resolution'],
    ['6161306839322897077', 'Exit full screen'],
    ['7071612439610534706', 'Cast...'],
    ['8145129506114534451', 'Off'],
    ['8345190086337560158', 'Full screen'],
    ['836055097473758014', 'Play'],
    ['9042260521669277115', 'Pause'],
  ]));
  localization.insert('es', new Map([
    ['1050953507607739202', 'volumen'],
    ['1077325112364709655', 'Atrás'],
    ['1142734805932039923', 'Retroceder'],
    ['1774834209035716827', 'Avance rápido'],
    ['1911090580951495029', 'Subtítulos'],
    ['2023925063728908356', 'Activar sonido'],
    ['298626259350585300', 'Desconocido'],
    ['3045980486001972586', 'En directo'],
    ['3278592358864783064', 'Idioma'],
    ['411375375680850814', 'No aplicable'],
    ['4259064532355692191', 'Automática'],
    ['4388316720828367903', 'Más ajustes'],
    ['5553522235935533682', 'Barra deslizante de búsqueda'],
    ['5963689277976480680', 'Silenciar'],
    ['6073266792045231479', 'Resolución'],
    ['6161306839322897077', 'Salir del modo de pantalla completa'],
    ['7071612439610534706', 'Reparto...'],
    ['8145129506114534451', 'No'],
    ['8345190086337560158', 'Pantalla completa'],
    ['836055097473758014', 'Reproducir'],
    ['9042260521669277115', 'Pausa'],
  ]));
  localization.insert('es-419', new Map([
    ['1050953507607739202', 'volumen'],
    ['1077325112364709655', 'Atrás'],
    ['1142734805932039923', 'Retroceder'],
    ['1774834209035716827', 'Avance rápido'],
    ['1911090580951495029', 'Subtítulos'],
    ['2023925063728908356', 'Activar sonido'],
    ['298626259350585300', 'Desconocido'],
    ['3045980486001972586', 'En vivo'],
    ['3278592358864783064', 'Idioma'],
    ['4259064532355692191', 'Auto'],
    ['4388316720828367903', 'Más opciones de configuración'],
    ['5553522235935533682', 'Barra deslizante de búsqueda'],
    ['5963689277976480680', 'Silenciar'],
    ['6073266792045231479', 'Resolución'],
    ['6161306839322897077', 'Salir de pantalla completa'],
    ['7071612439610534706', 'Transmitir…'],
    ['8145129506114534451', 'Desactivado'],
    ['8345190086337560158', 'Pantalla completa'],
    ['836055097473758014', 'Jugar'],
    ['9042260521669277115', 'Detener'],
  ]));
  localization.insert('fr', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Retour'],
    ['1142734805932039923', 'Retour arrière'],
    ['1774834209035716827', 'Avance rapide'],
    ['1911090580951495029', 'Sous-titres'],
    ['2023925063728908356', 'Activer le son'],
    ['298626259350585300', 'Inconnue'],
    ['3045980486001972586', 'En direct'],
    ['3278592358864783064', 'Langue'],
    ['411375375680850814', 'Sans objet'],
    ['4259064532355692191', 'Auto'],
    ['4388316720828367903', 'Autres paramètres'],
    ['5553522235935533682', 'Barre de recherche'],
    ['5963689277976480680', 'Désactiver le son'],
    ['6073266792045231479', 'Résolution'],
    ['6161306839322897077', 'Quitter le mode plein écran'],
    ['7071612439610534706', 'Caster sur…'],
    ['8145129506114534451', 'Désactivée'],
    ['8345190086337560158', 'Plein écran'],
    ['836055097473758014', 'Lire'],
    ['9042260521669277115', 'Mettre en veille'],
  ]));
  localization.insert('it', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Indietro'],
    ['1142734805932039923', 'Riavvolgi'],
    ['1774834209035716827', 'Avanti veloce'],
    ['1911090580951495029', 'Sottotitoli'],
    ['2023925063728908356', 'Riattiva audio'],
    ['298626259350585300', 'Sconosciuto'],
    ['3045980486001972586', 'Dal vivo'],
    ['3278592358864783064', 'Lingua'],
    ['411375375680850814', 'N/A'],
    ['4259064532355692191', 'Auto'],
    ['4388316720828367903', 'Altre impostazioni'],
    ['5553522235935533682', 'Dispositivo di scorrimento'],
    ['5963689277976480680', 'Disattiva audio'],
    ['6073266792045231479', 'Risoluzione'],
    ['6161306839322897077', 'Esci dalla modalità a schermo intero'],
    ['7071612439610534706', 'Trasmetti…'],
    ['8145129506114534451', 'Disattivato'],
    ['8345190086337560158', 'Schermo intero'],
    ['836055097473758014', 'Riproduci'],
    ['9042260521669277115', 'Metti in pausa'],
  ]));
  localization.insert('ja', new Map([
    ['1050953507607739202', '音量'],
    ['1077325112364709655', '戻る'],
    ['1142734805932039923', '巻き戻し'],
    ['1774834209035716827', '早送り'],
    ['1911090580951495029', '字幕'],
    ['2023925063728908356', 'ミュート解除'],
    ['298626259350585300', '不明'],
    ['3045980486001972586', 'ライブ'],
    ['3278592358864783064', '言語'],
    ['411375375680850814', '該当なし'],
    ['4259064532355692191', '自動'],
    ['4388316720828367903', 'その他の設定'],
    ['5553522235935533682', 'シーク バー'],
    ['5963689277976480680', 'ミュート'],
    ['6073266792045231479', '解像度'],
    ['6161306839322897077', '全画面モードの終了'],
    ['7071612439610534706', 'キャスト...'],
    ['8145129506114534451', 'オフ'],
    ['8345190086337560158', '全画面'],
    ['836055097473758014', '再生'],
    ['9042260521669277115', '一時停止'],
  ]));
  localization.insert('ko', new Map([
    ['1050953507607739202', '볼륨'],
    ['1077325112364709655', '뒤로'],
    ['1142734805932039923', '되감기'],
    ['1774834209035716827', '빨리감기'],
    ['1911090580951495029', '자막'],
    ['2023925063728908356', '음소거 해제'],
    ['298626259350585300', '알 수 없음'],
    ['3045980486001972586', '라이브'],
    ['3278592358864783064', '언어'],
    ['411375375680850814', '해당 없음'],
    ['4259064532355692191', '자동'],
    ['4388316720828367903', '설정 더보기'],
    ['5553522235935533682', '탐색 슬라이더'],
    ['5963689277976480680', '음소거'],
    ['6073266792045231479', '해상도'],
    ['6161306839322897077', '전체화면 종료'],
    ['7071612439610534706', '전송...'],
    ['8145129506114534451', '사용 안함'],
    ['8345190086337560158', '전체화면'],
    ['836055097473758014', '재생'],
    ['9042260521669277115', '일시중지'],
  ]));
  localization.insert('nl', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Terug'],
    ['1142734805932039923', 'Terugspoelen'],
    ['1774834209035716827', 'Vooruitspoelen'],
    ['1911090580951495029', 'Ondertiteling'],
    ['2023925063728908356', 'Dempen opheffen'],
    ['298626259350585300', 'Onbekend'],
    ['3045980486001972586', 'Live'],
    ['3278592358864783064', 'Taal'],
    ['411375375680850814', 'N.v.t.'],
    ['4259064532355692191', 'Automatisch'],
    ['4388316720828367903', 'Meer instellingen'],
    ['5553522235935533682', 'Zoekschuifbalk'],
    ['5963689277976480680', 'Dempen'],
    ['6073266792045231479', 'Resolutie'],
    ['6161306839322897077', 'Volledig scherm afsluiten'],
    ['7071612439610534706', 'Casten...'],
    ['8145129506114534451', 'Uit'],
    ['8345190086337560158', 'Volledig scherm'],
    ['836055097473758014', 'Afspelen'],
    ['9042260521669277115', 'Onderbreken'],
  ]));
  localization.insert('pl', new Map([
    ['1050953507607739202', 'głośność'],
    ['1077325112364709655', 'Wstecz'],
    ['1142734805932039923', 'Przewiń do tyłu'],
    ['1774834209035716827', 'Przewiń do przodu'],
    ['1911090580951495029', 'Napisy'],
    ['2023925063728908356', 'Wyłącz wyciszenie'],
    ['298626259350585300', 'Nieznane'],
    ['3045980486001972586', 'Na żywo'],
    ['3278592358864783064', 'Język'],
    ['411375375680850814', 'N/d'],
    ['4259064532355692191', 'Automatyczna'],
    ['4388316720828367903', 'Więcej ustawień'],
    ['5553522235935533682', 'Suwak przewijania'],
    ['5963689277976480680', 'Wycisz'],
    ['6073266792045231479', 'Rozdzielczość'],
    ['6161306839322897077', 'Zamknij pełny ekran'],
    ['7071612439610534706', 'Prześlij...'],
    ['8145129506114534451', 'Wyłączone'],
    ['8345190086337560158', 'Pełny ekran'],
    ['836055097473758014', 'Odtwarzaj'],
    ['9042260521669277115', 'Wstrzymaj'],
  ]));
  localization.insert('pt-BR', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Voltar'],
    ['1142734805932039923', 'Retroceder'],
    ['1774834209035716827', 'Avançar'],
    ['1911090580951495029', 'Legendas ocultas'],
    ['2023925063728908356', 'Ativar som'],
    ['298626259350585300', 'Desconhecido'],
    ['3045980486001972586', 'Ao vivo'],
    ['3278592358864783064', 'Idioma'],
    ['411375375680850814', 'N/A'],
    ['4259064532355692191', 'Automático'],
    ['4388316720828367903', 'Mais configurações'],
    ['5553522235935533682', 'Botão deslizante de busca'],
    ['5963689277976480680', 'Desativar som'],
    ['6073266792045231479', 'Resolução'],
    ['6161306839322897077', 'Sair da tela inteira'],
    ['7071612439610534706', 'Elenco...'],
    ['8145129506114534451', 'Desativado'],
    ['8345190086337560158', 'Tela inteira'],
    ['836055097473758014', 'Reproduzir'],
    ['9042260521669277115', 'Pausar'],
  ]));
  localization.insert('pt-PT', new Map([
    ['1050953507607739202', 'volume'],
    ['1077325112364709655', 'Anterior'],
    ['1142734805932039923', 'Recuar'],
    ['1774834209035716827', 'Avançar'],
    ['1911090580951495029', 'Legendas'],
    ['2023925063728908356', 'Reativar o som'],
    ['298626259350585300', 'Desconhecida'],
    ['3045980486001972586', 'Em direto'],
    ['3278592358864783064', 'Idioma'],
    ['411375375680850814', 'N/A'],
    ['4259064532355692191', 'Automático'],
    ['4388316720828367903', 'Mais definições'],
    ['5553522235935533682', 'Controlo de deslize da procura'],
    ['5963689277976480680', 'Desativar o som'],
    ['6073266792045231479', 'Resolução'],
    ['6161306839322897077', 'Sair do ecrã inteiro'],
    ['7071612439610534706', 'Transmitir...'],
    ['8145129506114534451', 'Desativado'],
    ['8345190086337560158', 'Ecrã inteiro'],
    ['836055097473758014', 'Reproduzir'],
    ['9042260521669277115', 'Colocar em pausa'],
  ]));
  localization.insert('ru', new Map([
    ['1050953507607739202', 'громкость'],
    ['1077325112364709655', 'Назад'],
    ['1142734805932039923', 'Перемотать назад'],
    ['1774834209035716827', 'Перемотать вперед'],
    ['1911090580951495029', 'Субтитры'],
    ['2023925063728908356', 'Включить звук'],
    ['298626259350585300', 'Неизвестно'],
    ['3045980486001972586', 'В эфире'],
    ['3278592358864783064', 'Язык'],
    ['411375375680850814', '–'],
    ['4259064532355692191', 'Автонастройка'],
    ['4388316720828367903', 'Дополнительные настройки'],
    ['5553522235935533682', 'Ползунок поиска'],
    ['5963689277976480680', 'Отключить звук'],
    ['6073266792045231479', 'Разрешение'],
    ['6161306839322897077', 'Выход из полноэкранного режима'],
    ['7071612439610534706', 'Добавить'],
    ['8145129506114534451', 'Выкл.'],
    ['8345190086337560158', 'Во весь экран'],
    ['836055097473758014', 'Смотреть'],
    ['9042260521669277115', 'Приостановить'],
  ]));
  localization.insert('th', new Map([
    ['1050953507607739202', 'ระดับเสียง'],
    ['1077325112364709655', 'กลับ'],
    ['1142734805932039923', 'กรอกลับ'],
    ['1774834209035716827', 'กรอไปข้างหน้า'],
    ['1911090580951495029', 'คำอธิบายวิดีโอ'],
    ['2023925063728908356', 'เปิดเสียง'],
    ['298626259350585300', 'ไม่ทราบ'],
    ['3045980486001972586', 'สด'],
    ['3278592358864783064', 'ภาษา'],
    ['4259064532355692191', 'อัตโนมัติ'],
    ['4388316720828367903', 'การตั้งค่าเพิ่มเติม'],
    ['5553522235935533682', 'แถบเลื่อนค้นหา'],
    ['5963689277976480680', 'ปิดเสียง'],
    ['6073266792045231479', 'ความละเอียด'],
    ['6161306839322897077', 'ออกจากโหมดเต็มหน้าจอ'],
    ['7071612439610534706', 'แคสต์...'],
    ['8145129506114534451', 'ปิด'],
    ['8345190086337560158', 'เต็มหน้าจอ'],
    ['836055097473758014', 'เล่น'],
    ['9042260521669277115', 'หยุดชั่วคราว'],
  ]));
  localization.insert('tr', new Map([
    ['1050953507607739202', 'ses düzeyi'],
    ['1077325112364709655', 'Geri'],
    ['1142734805932039923', 'Geri sar'],
    ['1774834209035716827', 'İleri sar'],
    ['1911090580951495029', 'Altyazılar'],
    ['2023925063728908356', 'Sesi aç'],
    ['298626259350585300', 'Bilinmiyor'],
    ['3045980486001972586', 'Canlı'],
    ['3278592358864783064', 'Dil'],
    ['4259064532355692191', 'Otomatik'],
    ['4388316720828367903', 'Diğer ayarlar'],
    ['5553522235935533682', 'Arama kaydırma çubuğu'],
    ['5963689277976480680', 'Sesi kapat'],
    ['6073266792045231479', 'Çözünürlük'],
    ['6161306839322897077', 'Tam ekrandan çık'],
    ['7071612439610534706', 'Yayınla...'],
    ['8145129506114534451', 'Kapalı'],
    ['8345190086337560158', 'Tam ekran'],
    ['836055097473758014', 'Oynat'],
    ['9042260521669277115', 'Duraklat'],
  ]));
  localization.insert('zh-CN', new Map([
    ['1050953507607739202', '音量'],
    ['1077325112364709655', '返回'],
    ['1142734805932039923', '快退'],
    ['1774834209035716827', '快进'],
    ['1911090580951495029', '字幕'],
    ['2023925063728908356', '取消静音'],
    ['298626259350585300', '未知'],
    ['3045980486001972586', '直播'],
    ['3278592358864783064', '语言'],
    ['4259064532355692191', '自动'],
    ['4388316720828367903', '更多设置'],
    ['5553522235935533682', '播放滑块'],
    ['5963689277976480680', '静音'],
    ['6073266792045231479', '分辨率'],
    ['6161306839322897077', '退出全屏'],
    ['7071612439610534706', '投射…'],
    ['8145129506114534451', '关闭'],
    ['8345190086337560158', '全屏'],
    ['836055097473758014', '播放'],
    ['9042260521669277115', '暂停'],
  ]));
  localization.insert('zh-HK', new Map([
    ['1050953507607739202', '音量'],
    ['1077325112364709655', '返回'],
    ['1142734805932039923', '倒帶'],
    ['1774834209035716827', '快轉'],
    ['1911090580951495029', '字幕'],
    ['2023925063728908356', '解除靜音'],
    ['298626259350585300', '不明'],
    ['3045980486001972586', '直播'],
    ['3278592358864783064', '語言'],
    ['4259064532355692191', '自動'],
    ['4388316720828367903', '更多設定'],
    ['5553522235935533682', '搜尋滑桿'],
    ['5963689277976480680', '靜音'],
    ['6161306839322897077', '結束全螢幕'],
    ['7071612439610534706', '投放…'],
    ['8145129506114534451', '未選取'],
    ['8345190086337560158', '全螢幕'],
    ['836055097473758014', '播放'],
    ['9042260521669277115', '暫停'],
  ]));
  localization.insert('zh-TW', new Map([
    ['1050953507607739202', '音量'],
    ['1077325112364709655', '返回'],
    ['1142734805932039923', '倒轉'],
    ['1774834209035716827', '快轉'],
    ['1911090580951495029', '字幕'],
    ['2023925063728908356', '解除靜音'],
    ['298626259350585300', '未知'],
    ['3045980486001972586', '直播'],
    ['3278592358864783064', '語言'],
    ['411375375680850814', '不適用'],
    ['4259064532355692191', '自動'],
    ['4388316720828367903', '更多設定'],
    ['5553522235935533682', '搜尋滑桿'],
    ['5963689277976480680', '靜音'],
    ['6073266792045231479', '解析度'],
    ['6161306839322897077', '結束全螢幕'],
    ['7071612439610534706', '投放…'],
    ['8145129506114534451', '關閉'],
    ['8345190086337560158', '全螢幕'],
    ['836055097473758014', '播放'],
    ['9042260521669277115', '暫停'],
  ]));
};

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_BACK = '1077325112364709655';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_CAPTIONS = '1911090580951495029';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_CAST = '7071612439610534706';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_EXIT_FULL_SCREEN = '6161306839322897077';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_FAST_FORWARD = '1774834209035716827';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_FULL_SCREEN = '8345190086337560158';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_LANGUAGE = '3278592358864783064';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_LIVE = '3045980486001972586';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_MORE_SETTINGS = '4388316720828367903';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_MUTE = '5963689277976480680';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_PAUSE = '9042260521669277115';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_PLAY = '836055097473758014';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_RESOLUTION = '6073266792045231479';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_REWIND = '1142734805932039923';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_SEEK = '5553522235935533682';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_UNMUTE = '2023925063728908356';

/** @const {string} */
shaka.ui.Locales.Ids.ARIA_LABEL_VOLUME = '1050953507607739202';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_AUTO_QUALITY = '4259064532355692191';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_CAPTIONS = '1911090580951495029';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_CAPTIONS_OFF = '8145129506114534451';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_CAST = '7071612439610534706';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_LANGUAGE = '3278592358864783064';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_LIVE = '3045980486001972586';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_MULTIPLE_LANGUAGES = '411375375680850814';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_NOT_APPLICABLE = '411375375680850814';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_NOT_CASTING = '8145129506114534451';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_RESOLUTION = '6073266792045231479';

/** @const {string} */
shaka.ui.Locales.Ids.LABEL_UNKNOWN_LANGUAGE = '298626259350585300';
