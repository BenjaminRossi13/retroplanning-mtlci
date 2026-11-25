/* ============================================================
   Rétroplanning Master MTLCI — outil de promo
   - Base commune : items / categories / groups (lecture seule pour les utilisateurs)
   - Calque personnel de chaque utilisateur (validations, notes, dates, échéances ajoutées)
     stocké dans son navigateur : il n'affecte jamais les autres.
   ============================================================ */

/* ---------------- i18n ---------------- */
const T={
fr:{
  app_sub:'MSc MTLCI · 2026-27', nav_dash:'Tableau de bord', nav_tl:'Rétroplanning', nav_gantt:'Diagramme de Gantt', nav_cal:'Calendrier', nav_cats:'Catégories',
  bn_home:'Accueil', bn_tl:'Planning', bn_gantt:'Gantt', bn_cal:'Calendrier', bn_cats:'Catégories',
  cat_blocs:'Blocs diplômants', cat_partiels:'Partiels', cat_memoire:'Mémoire', cat_rapport:"Rapport d'alternance", cat_casfinal:'Cas final',
  short_blocs:'Blocs', short_partiels:'Partiels', short_memoire:'Mémoire', short_rapport:'Rapport', short_casfinal:'Cas final',
  st_todo:'À faire', st_doing:'En cours', st_done:'Terminé',
  u_done:'Terminé', u_done_exam:'Passé', u_tbd:'À définir', u_exam_past:'Épreuve passée', u_past:'Passé · fait ?', u_urgent:'Urgent', u_doing:'En cours', u_soon:'Proche', u_later:'À venir',
  d_today:"Aujourd'hui", d_past:'Passé', d_past_exam:'Passée', d_days:'J-{n}', tbd:'À définir',
  new_item:'Ajouter une échéance', new_title:'Mon échéance',
  search_ph:'Rechercher (matière, bloc, cas…)', search_items:'Échéances', search_groups:'Groupes', search_none:'Aucun résultat pour « {q} ».', search_cat:'Catégories',
  saved_local:'Vos modifications sont enregistrées sur cet appareil', saved_acct:'Vos modifications sont enregistrées', offline:"Hors ligne : l'affichage n'est peut-être pas à jour",
  unhide:'👁 Réafficher {n} échéance(s) retirée(s)', agenda_all:'📅 Tout ajouter à mon agenda', lang:'Langue',
  sub_tl:'Toutes les échéances, par ordre chronologique', sub_gantt:'Toutes les catégories', sub_cal:'Vue mensuelle', sub_cat:'Catégorie',
  loading:'Chargement…',
  warn_t:'Vérifiez toujours vos mails officiels — ils sont prioritaires',
  warn_p:"Les dates, deadlines et consignes peuvent être modifiées à tout moment. Les mails d’information et de mise à jour envoyés par <b>Mme Elisabeth Jouannaux</b> et <b>Mme Cherifa Meguenni</b> font foi et sont prioritaires sur cet outil : vérifiez-les systématiquement. Cet outil sert uniquement à aider au suivi ; il ne remplace pas les informations officielles et chacun reste responsable de vérifier ses dates et ses rendus.",
  warn_s:"Les mails de <b>Mme Jouannaux</b> et <b>Mme Meguenni</b> sont prioritaires : vérifiez-les pour toute mise à jour de date ou de deadline. Cet outil aide au suivi mais ne remplace pas les informations officielles.",
  drive_t:'Drive de la promo', drive_s:'Cours, supports et consignes de chaque partiel, bloc et du mémoire', drive_btn:'Ouvrir le Drive',
  welcome_t:'👋 Bienvenue sur le rétroplanning de la promo MTLCI 2026-27', hide:'Masquer',
  welcome_p:"Retrouvez toutes les échéances de l'année : partiels, blocs, mémoire, rapport d'alternance et cas final, avec les dates, consignes et dossiers de cours. Validez vos étapes ✓, ajoutez vos notes, vos dates ou vos propres échéances : <b>vos modifications ne sont visibles que par vous</b> et n'affectent personne d'autre.",
  welcome_fav:"💡 <b>Pour garder vos modifications :</b> ajoutez cette page à vos <b>favoris</b> et revenez-y toujours depuis le <b>même navigateur, sur le même appareil</b>. Vos validations et notes sont enregistrées dans ce navigateur : elles ne suivent pas sur un autre appareil, ne sont pas conservées en navigation privée et disparaissent si vous effacez les données du site.",
  welcome_hint:'📅 Astuce : ajoutez les échéances à votre agenda (Google, iPhone, Outlook) pour recevoir des rappels.',
  soon_t:'📆 Les 15 prochains jours', soon_none:'Rien dans les 15 prochains jours.', soon_next:'Prochaine échéance : <b>{t}</b> le {d} ({n}).',
  upd_t:'🔔 Dernières mises à jour', upd_new:'Nouveau', upd_mod:'Modifié', upd_date:'Date : {a} → {b}', upd_time:'Horaire : {a} → {b}', upd_room:'Salle : {a} → {b}', upd_other:'Informations mises à jour', upd_on:'le {d}',
  past_t:'⏳ Passées — les avez-vous faites ?', past_hint:'Cochez ✓ ce que vous avez rendu ou passé.',
  k_total:'Échéances', k_done:'Terminées', k_doing:'En cours', k_up:'À venir', k_past:'À valider',
  next_t:'Prochaine échéance', next_none:'Aucune échéance datée à venir.', days_word:'jour(s)',
  upcoming_t:'Prochaines échéances', see_all:'Tout voir →', nothing:'Rien à venir.',
  prog_t:'Progression globale', prog_sub:'{a} sur {b} échéances terminées', by_cat:'Par catégorie', waiting:'En attente des documents',
  undated_t:'Dates à définir', provisional:'Date provisoire',
  leg_urgent:'Urgent (≤ 7 j)', leg_soon:'Proche (≤ 30 j)', leg_past:'Passé, à valider', leg_doing:'En cours', leg_done:'Terminé', leg_tbd:'À définir',
  empty_t:"Aucune échéance pour l'instant", empty_p:'Ajoutez une échéance pour commencer.',
  hide_done:'Masquer terminées', month_now:'Mois en cours', empty_filter:'Modifiez les filtres ou ajoutez une échéance.', no_items:'Aucune échéance',
  alt_show:'Afficher les jours de cours', alt_hide:'Jours de cours affichés', alt_ecole:'École', alt_eval:'Évaluation', alt_casfinal:'Cas final', alt_mixte:'École si rattrapage', alt_ent:'Entreprise', alt_ent_s:'Entr.', alt_ferie:'Férié', alt_plus_eval:'+ session d’évaluation (« Ecole » encadré)', alt_count:'{n} jour(s) à l’école ce mois-ci', alt_src:'Jours de cours : calendrier de formation en alternance KEDGE ITL 24 M2 (mis à jour le 12/05/2026, sous réserve de modification). Le « + » indique une session d’évaluation / e-learning en plus des cours.', alt_src_s:'calendrier d’alternance KEDGE du 12/05/2026',
  cal_prev:'Mois précédent', cal_next:'Mois suivant', this_month:'Ce mois-ci', none_month:'Aucune échéance ce mois-ci.', next_month_btn:'Prochaine échéance : {d} →',
  cat_what:'ℹ️ À quoi sert cette catégorie ?', keyinfo:'Infos clés', source:'Source', cat_empty_t:"Rien pour l'instant", cat_empty_p:'Les informations de cette catégorie arriveront bientôt.',
  tab_list:'☰ Échéances', tab_exams:'☰ Épreuves', tab_gantt:'▤ Gantt', tab_groups:'👥 Groupes',
  sec_official:'Échéances officielles', sec_mine:'Mes échéances',
  done_n:'{a}/{b} terminées · {p}%', done_n_exam:'{a}/{b} passés · {p}%',
  validate:'✓ Valider', validated:'✓ Validé', mark_passed:'✓ Marquer passé', passed:'✓ Passé', details:'Détails', agenda:'📅 Agenda', edit:'✎ Modifier',
  validated_on:'Validé le {d}', start_on:'Début {d}', notation:'Notation', notation_tbd:'à venir', course_folder:'Dossier de cours', no_folder:'Dossier de cours : aucun lien', n_docs:'{n} document(s)', time_tbd:'Horaire\nà définir',
  chk_title_on:'Validé — cliquer pour annuler', chk_title:'Valider cette échéance',
  t_validated:'✓ « {t} » validé', t_unvalidated:'Validation annulée',
  grp_search:'🔎 Rechercher un nom ou un groupe…', grp_n:'{n} groupes', grp_mine:'★ Mon groupe', grp_set:"C'est mon groupe", grp_none:'Aucun résultat.', grp_your:'👥 Votre groupe : <b>{g}</b>', grp_choose:'👥 Indiquez votre groupe pour le retrouver ici.', grp_choose_btn:'Choisir mon groupe', grp_saved:'Groupe enregistré : {g}', grp_cleared:'Groupe retiré',
  gz_day:'Jours', gz_week:'Semaines', gz_month:'Mois', g_today:"Aujourd'hui", g_work:'Temps de travail', g_steps:'Étapes du projet', g_waiting:'en attente', g_none:'Aucune échéance',
  gl_period:'Période (début → deadline)', gl_deadline:'Deadline', gl_work:"Temps de travail (depuis aujourd'hui, ou depuis l'échéance précédente pour les jalons et les blocs)", gl_done:'Validé', gl_today:"Aujourd'hui", gl_tbd:'Date à définir',
  close:'Fermer', back:'← Retour à la fiche', mine_tag:'Échéance ajoutée par vous', mod_tag:'Modifié par vous', reset:"↺ Revenir à la version d'origine", reset_done:"Version d'origine rétablie",
  f_date:'Date', f_time:'Horaire', f_room:'Salle', f_format:'Format', f_start:'Début', f_period:'Du {a} au {b}',
  deliverables:'Ce qu’il faut rendre', deliverables_exam:'Cours / chapitres', documents:'Documents', my_notes:'Mes notes', my_notes_ph:'Vos notes personnelles…',
  remove:'Retirer de mon planning', delete:'Supprimer', remove_q:'Retirer « {t} » ?', delete_q:'Supprimer « {t} » ?', remove_p:"Cette échéance ne s'affichera plus dans votre planning (les autres utilisateurs ne sont pas concernés). Vous pourrez la réafficher depuis le menu.", delete_p:'Cette action est définitive.', cancel:'Annuler', done_toast:'C’est fait', unhidden:'Échéances réaffichées',
  e_title:'Titre', e_date:'Date limite', e_date_exam:"Date de l'épreuve", e_status:'Statut', e_tstart:'Heure de début', e_tend:'Heure de fin', e_room:'Salle(s)', e_format:'Format', e_eval:"Notation de l'examen", e_desc:'Description', e_note:'Précision sur la date', e_checklist:'Livrables / étapes', e_add_ck:'＋ Ajouter un livrable', e_links:'Liens vers des documents', e_add_link:'＋ Ajouter un lien', e_label:'Libellé', e_more:"Plus d'options", e_start:'Date de début (barre du Gantt)', e_cat:'Catégorie', e_conf:'Fiabilité de la date', conf_ok:'Confirmée', conf_prov:'Provisoire', e_empty_date:'Vide = « À définir »', saved:'Enregistré', e_your_change:'Vos changements ne concernent que vous.',
  ag_t:'Ajouter à mon agenda', ag_google:'Google Agenda', ag_google_s:"Ouvre Google Agenda avec l'événement pré-rempli", ag_ics:'iPhone, Mac, Outlook (.ics)', ag_ics_s:'Télécharge un fichier à ouvrir avec votre agenda', ag_all_t:'Ajouter toutes les échéances à mon agenda', ag_all_p:'Téléchargez un fichier .ics avec les échéances à venir (rappels 7 jours et 1 jour avant). Ouvrez-le sur iPhone/Mac/Outlook. Pour Google Agenda : Paramètres → Importer et exporter → Importer.', ag_all_btn:'Télécharger le fichier .ics ({n} échéances)', ag_dl:'Fichier proposé au téléchargement', ag_cancel:'Téléchargement annulé', ag_none:'Aucune échéance à venir dans ces catégories.',
  sub_btn:'🔔 Abonner mon agenda', sub_t:'Abonner mon agenda aux échéances de la promo', sub_p:'Ajoutez une fois le calendrier de la promo à votre agenda : toutes les échéances (partiels, blocs, mémoire, cas final) y apparaissent et se mettent à jour automatiquement quand la base change.', sub_google:'Ouvre Google Agenda et propose d’ajouter le calendrier', sub_apple:'Ouvre l’app Calendrier et propose de s’abonner', sub_link:'Ou copiez le lien d’abonnement (autres agendas)', sub_copy:'Copier', sub_copied:'Lien copié', sub_select:'Lien sélectionné : copiez-le avec Ctrl/Cmd+C', sub_note:'Le calendrier contient la base commune (pas vos échéances personnelles). Les mises à jour peuvent prendre quelques heures à apparaître, surtout dans Google Agenda.', agenda_all_dl:'📥 Télécharger le fichier .ics',
  ag_o365:'Outlook école / entreprise', ag_o365_s:'Compte Microsoft 365 (KEDGE, entreprise…)', ag_outlook:'Outlook.com / Hotmail', ag_outlook_s:'Compte Microsoft personnel', ag_noics:'Format .ics non disponible ici', ag_noics_hint:'Apple Calendar (.ics) et l’ajout de toutes les échéances d’un coup seront disponibles sur la version web (GitHub) de l’outil.',
  ics_prefix:'[MTLCI]', ics_room:'Salle', ics_note:'Note', ics_links:'Documents',
},
en:{
  app_sub:'MSc MTLCI · 2026-27', nav_dash:'Dashboard', nav_tl:'Timeline', nav_gantt:'Gantt chart', nav_cal:'Calendar', nav_cats:'Categories',
  bn_home:'Home', bn_tl:'Timeline', bn_gantt:'Gantt', bn_cal:'Calendar', bn_cats:'Categories',
  cat_blocs:'Skill blocks', cat_partiels:'Exams', cat_memoire:'Thesis', cat_rapport:'Work-study report', cat_casfinal:'Final case',
  short_blocs:'Blocks', short_partiels:'Exams', short_memoire:'Thesis', short_rapport:'Report', short_casfinal:'Final case',
  st_todo:'To do', st_doing:'In progress', st_done:'Done',
  u_done:'Done', u_done_exam:'Taken', u_tbd:'TBD', u_exam_past:'Exam passed', u_past:'Past · done?', u_urgent:'Urgent', u_doing:'In progress', u_soon:'Soon', u_later:'Upcoming',
  d_today:'Today', d_past:'Past', d_past_exam:'Past', d_days:'D-{n}', tbd:'TBD',
  new_item:'Add a deadline', new_title:'My deadline',
  search_ph:'Search (course, block, case…)', search_items:'Deadlines', search_groups:'Groups', search_none:'No results for “{q}”.', search_cat:'Categories',
  saved_local:'Your changes are saved on this device', saved_acct:'Your changes are saved', offline:'Offline: data may be out of date',
  unhide:'👁 Show {n} removed deadline(s)', agenda_all:'📅 Add all to my calendar', lang:'Language',
  sub_tl:'All deadlines in chronological order', sub_gantt:'All categories', sub_cal:'Monthly view', sub_cat:'Category',
  loading:'Loading…',
  warn_t:'Always check your official emails — they take priority',
  warn_p:"Dates, deadlines and instructions can change at any time. The information and update emails sent by <b>Ms Elisabeth Jouannaux</b> and <b>Ms Cherifa Meguenni</b> are authoritative and take priority over this tool: always check them. This tool is only a tracking aid; it does not replace official information and everyone remains responsible for checking their own dates and submissions.",
  warn_s:"Emails from <b>Ms Jouannaux</b> and <b>Ms Meguenni</b> take priority: check them for any date or deadline update. This tool helps you keep track but does not replace official information.",
  drive_t:'Class Drive', drive_s:'Courses, slides and instructions for every exam, block and the thesis', drive_btn:'Open the Drive',
  welcome_t:'👋 Welcome to the MTLCI 2026-27 class planner', hide:'Hide',
  welcome_p:'Find every deadline of the year: exams, skill blocks, thesis, work-study report and final case, with dates, instructions and course folders. Tick off your steps ✓, add notes, dates or your own deadlines: <b>your changes are only visible to you</b> and never affect anyone else.',
  welcome_fav:'💡 <b>To keep your changes:</b> bookmark this page and always come back from the <b>same browser on the same device</b>. Your ticks and notes are stored in this browser: they don’t follow you to another device, aren’t kept in private browsing, and are lost if you clear the site’s data.',
  welcome_hint:'📅 Tip: add deadlines to your calendar (Google, iPhone, Outlook) to get reminders.',
  soon_t:'📆 Next 15 days', soon_none:'Nothing in the next 15 days.', soon_next:'Next deadline: <b>{t}</b> on {d} ({n}).',
  upd_t:'🔔 Latest updates', upd_new:'New', upd_mod:'Updated', upd_date:'Date: {a} → {b}', upd_time:'Time: {a} → {b}', upd_room:'Room: {a} → {b}', upd_other:'Information updated', upd_on:'on {d}',
  past_t:'⏳ Past — did you do them?', past_hint:'Tick ✓ what you have submitted or taken.',
  k_total:'Deadlines', k_done:'Done', k_doing:'In progress', k_up:'Upcoming', k_past:'To confirm',
  next_t:'Next deadline', next_none:'No upcoming dated deadline.', days_word:'day(s)',
  upcoming_t:'Upcoming deadlines', see_all:'See all →', nothing:'Nothing upcoming.',
  prog_t:'Overall progress', prog_sub:'{a} of {b} deadlines done', by_cat:'By category', waiting:'Waiting for documents',
  undated_t:'Dates to be confirmed', provisional:'Provisional date',
  leg_urgent:'Urgent (≤ 7 d)', leg_soon:'Soon (≤ 30 d)', leg_past:'Past, to confirm', leg_doing:'In progress', leg_done:'Done', leg_tbd:'TBD',
  empty_t:'No deadlines yet', empty_p:'Add a deadline to get started.',
  hide_done:'Hide done', month_now:'This month', empty_filter:'Change the filters or add a deadline.', no_items:'No deadlines',
  alt_show:'Show school days', alt_hide:'School days shown', alt_ecole:'School', alt_eval:'Assessment', alt_casfinal:'Final case', alt_mixte:'School if make-up', alt_ent:'Company', alt_ent_s:'Co.', alt_ferie:'Holiday', alt_plus_eval:'+ assessment session (boxed “Ecole”)', alt_count:'{n} school day(s) this month', alt_src:'School days: KEDGE ITL 24 M2 work-study calendar (updated 12/05/2026, subject to change). “+” means an assessment / e-learning session on top of classes.', alt_src_s:'KEDGE work-study calendar, 12/05/2026',
  cal_prev:'Previous month', cal_next:'Next month', this_month:'This month', none_month:'No deadlines this month.', next_month_btn:'Next deadline: {d} →',
  cat_what:'ℹ️ What is this category for?', keyinfo:'Key information', source:'Source', cat_empty_t:'Nothing yet', cat_empty_p:'Information for this category is coming soon.',
  tab_list:'☰ Deadlines', tab_exams:'☰ Exams', tab_gantt:'▤ Gantt', tab_groups:'👥 Groups',
  sec_official:'Official deadlines', sec_mine:'My deadlines',
  done_n:'{a}/{b} done · {p}%', done_n_exam:'{a}/{b} taken · {p}%',
  validate:'✓ Mark done', validated:'✓ Done', mark_passed:'✓ Mark taken', passed:'✓ Taken', details:'Details', agenda:'📅 Calendar', edit:'✎ Edit',
  validated_on:'Done on {d}', start_on:'Starts {d}', notation:'Grading', notation_tbd:'coming soon', course_folder:'Course folder', no_folder:'Course folder: no link', n_docs:'{n} document(s)', time_tbd:'Time\nTBD',
  chk_title_on:'Done — click to undo', chk_title:'Mark as done',
  t_validated:'✓ “{t}” marked done', t_unvalidated:'Undone',
  grp_search:'🔎 Search a name or group…', grp_n:'{n} groups', grp_mine:'★ My group', grp_set:'This is my group', grp_none:'No results.', grp_your:'👥 Your group: <b>{g}</b>', grp_choose:'👥 Select your group to see it here.', grp_choose_btn:'Choose my group', grp_saved:'Group saved: {g}', grp_cleared:'Group cleared',
  gz_day:'Days', gz_week:'Weeks', gz_month:'Months', g_today:'Today', g_work:'Work time', g_steps:'Project steps', g_waiting:'pending', g_none:'No deadlines',
  gl_period:'Period (start → deadline)', gl_deadline:'Deadline', gl_work:'Work time (from today, or from the previous deadline for thesis milestones and blocks)', gl_done:'Done', gl_today:'Today', gl_tbd:'Date TBD',
  close:'Close', back:'← Back to details', mine_tag:'Added by you', mod_tag:'Edited by you', reset:'↺ Restore original version', reset_done:'Original version restored',
  f_date:'Date', f_time:'Time', f_room:'Room', f_format:'Format', f_start:'Start', f_period:'From {a} to {b}',
  deliverables:'What to submit', deliverables_exam:'Courses / chapters', documents:'Documents', my_notes:'My notes', my_notes_ph:'Your personal notes…',
  remove:'Remove from my planner', delete:'Delete', remove_q:'Remove “{t}”?', delete_q:'Delete “{t}”?', remove_p:'This deadline will no longer appear in your planner (other users are not affected). You can show it again from the menu.', delete_p:'This cannot be undone.', cancel:'Cancel', done_toast:'Done', unhidden:'Deadlines shown again',
  e_title:'Title', e_date:'Deadline', e_date_exam:'Exam date', e_status:'Status', e_tstart:'Start time', e_tend:'End time', e_room:'Room(s)', e_format:'Format', e_eval:'Exam grading', e_desc:'Description', e_note:'Date details', e_checklist:'Deliverables / steps', e_add_ck:'＋ Add a deliverable', e_links:'Document links', e_add_link:'＋ Add a link', e_label:'Label', e_more:'More options', e_start:'Start date (Gantt bar)', e_cat:'Category', e_conf:'Date reliability', conf_ok:'Confirmed', conf_prov:'Provisional', e_empty_date:'Empty = “TBD”', saved:'Saved', e_your_change:'Your changes only affect you.',
  ag_t:'Add to my calendar', ag_google:'Google Calendar', ag_google_s:'Opens Google Calendar with the event pre-filled', ag_ics:'iPhone, Mac, Outlook (.ics)', ag_ics_s:'Downloads a file to open with your calendar', ag_all_t:'Add all deadlines to my calendar', ag_all_p:'Download an .ics file with upcoming deadlines (reminders 7 days and 1 day before). Open it on iPhone/Mac/Outlook. For Google Calendar: Settings → Import & export → Import.', ag_all_btn:'Download the .ics file ({n} deadlines)', ag_dl:'File offered for download', ag_cancel:'Download cancelled', ag_none:'No upcoming deadlines in these categories.',
  sub_btn:'🔔 Subscribe my calendar', sub_t:'Subscribe your calendar to the class deadlines', sub_p:'Add the class calendar once: every deadline (exams, blocks, thesis, final case) appears in your calendar and updates automatically when the base changes.', sub_google:'Opens Google Calendar and offers to add the calendar', sub_apple:'Opens the Calendar app and offers to subscribe', sub_link:'Or copy the subscription link (other calendars)', sub_copy:'Copy', sub_copied:'Link copied', sub_select:'Link selected: copy it with Ctrl/Cmd+C', sub_note:'The calendar contains the shared base (not your personal deadlines). Updates may take a few hours to show, especially in Google Calendar.', agenda_all_dl:'📥 Download the .ics file',
  ag_o365:'Outlook school / work', ag_o365_s:'Microsoft 365 account (KEDGE, company…)', ag_outlook:'Outlook.com / Hotmail', ag_outlook_s:'Personal Microsoft account', ag_noics:'.ics format not available here', ag_noics_hint:'Apple Calendar (.ics) and adding all deadlines at once will be available on the web (GitHub) version of the tool.',
  ics_prefix:'[MTLCI]', ics_room:'Room', ics_note:'Note', ics_links:'Documents',
}};
let LANG='fr'; try{ LANG=localStorage.getItem('rp-lang')||'fr'; }catch(e){}
if(!T[LANG]) LANG='fr';
function t(k,v){ let s=T[LANG][k]; if(s==null) s=T.fr[k]; if(s==null) s=k; if(v) s=s.replace(/\{(\w+)\}/g,(m,x)=>v[x]!=null?v[x]:''); return s; }
const LOC=()=>LANG==='en'?'en-GB':'fr-FR';

/* ---------------- Config ---------------- */
const CATEGORIES = [
  {key:'blocs',    color:'var(--c-blocs)',    hex:'#7c3aed', letter:'B'},
  {key:'partiels', color:'var(--c-partiels)', hex:'#0891b2', letter:'P'},
  {key:'memoire',  color:'var(--c-memoire)',  hex:'#db2777', letter:'M'},
  {key:'rapport',  color:'var(--c-rapport)',  hex:'#a16207', letter:'R'},
  {key:'casfinal', color:'var(--c-casfinal)', hex:'#0f766e', letter:'C'},
];
const CAT = Object.fromEntries(CATEGORIES.map(c=>[c.key,c]));
const cname = k => t('cat_'+k), cshort = k => t('short_'+k);
const STATUS_KEYS=['todo','doing','done'];
const LS_KEY='retroplanning-master-v1', OV_KEY='retroplanning-master-suivi-v1', SEEN_KEY='rp-seen-v2', GRP_KEY='rp-mygroup';
const PERSONAL=['status','completedAt','comments'];

/* ---------------- State ---------------- */
const S = {
  mode:'loading', loaded:false, stale:false,
  shared:new Map(), items:new Map(), cats:{}, groups:[],
  ov:{patches:{},custom:{},hidden:[],ticks:{}}, ovStore:'local', uid:null,
  view:'dashboard', filters:new Set(CATEGORIES.map(c=>c.key)), hideDone:false, calMonth:null,
  openId:null, dEdit:false, gq:'', q:'',
  zoom:'week', showEst:true, collapsed:new Set(), catTab:{}, gScroll:{},
  seen:null, myGroup:{}, alt:null, showAlt:true,
};
let db=null, downloads=null;

/* ---------------- Utils ---------------- */
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => 'i'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const today0 = () => { const d=new Date(); d.setHours(0,0,0,0); return d; };
const parseD = s => { if(!s||!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null; const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); };
const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const daysLeft = s => { const d=parseD(s); return d? Math.round((d-today0())/864e5) : null; };
const fmt = (s,opt) => { const d=parseD(s); return d? d.toLocaleDateString(LOC(),opt||{weekday:'short',day:'numeric',month:'long',year:'numeric'}) : t('tbd'); };
const FULL={weekday:'long',day:'numeric',month:'long',year:'numeric'}, SHORT={day:'numeric',month:'short',year:'numeric'}, DM={day:'numeric',month:'short'};
const safeUrl = u => /^https?:\/\//i.test(u||'') ? u : (u? 'https://'+u : '');
const isExam = it => it.category==='partiels';
const timeTxt = it => it.timeStart ? (it.timeStart+(it.timeEnd?'–'+it.timeEnd:'')) : '';
const addDays=(d,n)=>{const x=new Date(d); x.setDate(x.getDate()+n); return x;};
const dDiff=(a,b)=>Math.round((b-a)/864e5);
const monday=d=>addDays(d,-((d.getDay()+6)%7));
function L(it,f){ if(LANG==='en'&&it.en&&it.en[f]) return it.en[f]; return it[f]; }
function Lck(it,i){ const c=it.checklist[i]; if(LANG==='en'&&it.en&&Array.isArray(it.en.checklist)&&it.en.checklist[i]&&!it._ckmod) return it.en.checklist[i]; return c.t; }
function CM(key,f){ const m=S.cats[key]||{}; if(LANG==='en'&&m.en&&m.en[f]) return m.en[f]; return m[f]; }
function GL(g,f){ if(LANG==='en'&&g.en&&g.en[f]) return g.en[f]; return g[f]; }
function lsGet(k,d){ try{ const v=localStorage.getItem(k); return v==null?d:JSON.parse(v); }catch(e){ return d; } }
function lsSet(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }

function urgency(it){
  if(it.status==='done') return {cls:'u-green',label:t(isExam(it)?'u_done_exam':'u_done'),color:'var(--green)'};
  const n=daysLeft(it.date);
  if(n===null) return {cls:'u-gray',label:t('u_tbd'),color:'var(--gray)'};
  if(n<0&&isExam(it)) return {cls:'u-gray',label:t('u_exam_past'),color:'var(--gray)'};
  if(n<0) return {cls:'u-past',label:t('u_past'),color:'#b45309'};
  if(n<=7) return {cls:'u-red',label:t('u_urgent'),color:'var(--red)'};
  if(it.status==='doing') return {cls:'u-blue',label:t('u_doing'),color:'var(--blue)'};
  if(n<=30) return {cls:'u-orange',label:t('u_soon'),color:'var(--orange)'};
  return {cls:'u-neutral',label:t('u_later'),color:'#9ca3af'};
}
function daysTxt(it){
  if(it.status==='done') return '✓';
  const n=daysLeft(it.date);
  if(n===null) return '—';
  if(n===0) return t('d_today');
  if(n<0) return t(isExam(it)?'d_past_exam':'d_past');
  return t('d_days',{n});
}
function sortItems(arr){
  return arr.slice().sort((a,b)=>{
    const da=a.date||'9999', dbb=b.date||'9999';
    if(da!==dbb) return da<dbb?-1:1;
    const ta=a.timeStart||'99', tb=b.timeStart||'99'; if(ta!==tb) return ta<tb?-1:1;
    return (a.order??0)-(b.order??0);
  });
}
const allItems = () => sortItems([...S.items.values()]);
const byCat = k => allItems().filter(i=>i.category===k);
function toast(msg){ const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('on'); clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.remove('on'),2000); }
function normalize(o){
  return {
    id:String(o.id||uid()), category:CAT[o.category]?o.category:'memoire',
    title:String(o.title||'—'), description:String(o.description||''),
    date:parseD(o.date)?o.date:null, startDate:parseD(o.startDate)?o.startDate:null,
    dateConfidence:o.dateConfidence==='provisoire'?'provisoire':'confirmee',
    dateNote:String(o.dateNote||''), yearInferred:!!o.yearInferred,
    status:STATUS_KEYS.includes(o.status)?o.status:'todo', official:!!o.official, completedAt:parseD(o.completedAt)?o.completedAt:null,
    examType:o.examType||'', order:Number(o.order)||0,
    timeStart:'', timeEnd:'', room:'', // horaires et salles volontairement non gérés (à vérifier dans les mails officiels) examFormat:String(o.examFormat||''), evaluation:String(o.evaluation||''), semester:String(o.semester||''),
    checklist:Array.isArray(o.checklist)?o.checklist.map(c=>({t:String(c.t||''),d:!!c.d})):[],
    links:Array.isArray(o.links)?o.links.map(l=>({label:String(l.label||''),url:String(l.url||'')})):[],
    comments:String(o.comments||''), source:String(o.source||''), updatedAt:o.updatedAt||null,
    en:o.en&&typeof o.en==='object'?o.en:null,
  };
}

/* ---------------- Personal layer (calque) ---------------- */
const writeChains={};
function queueWrite(key,fn){
  const prev=writeChains[key]||Promise.resolve();
  const next=prev.then(fn).catch(e=>{ if(key.startsWith('data/users/')){ S.ovStore='local'; renderSide(); } });
  writeChains[key]=next; return next;
}
function stripMeta(o){ const c={...o}; Object.keys(c).forEach(k=>{ if(k[0]==='_') delete c[k]; }); return c; }
const same=(a,b)=>JSON.stringify(a??null)===JSON.stringify(b??null);
function recompute(){
  const m=new Map(), ov=S.ov, hidden=new Set(ov.hidden||[]);
  S.shared.forEach((sh,id)=>{
    if(hidden.has(id)) return;
    const p=ov.patches[id]||{};
    const it=normalize({...sh,...p,id}); it.en=sh.en||null;
    const ticks=ov.ticks[id];
    if(ticks) it.checklist=it.checklist.map(c=>({t:c.t,d:ticks.includes(c.t)}));
    it._shared=true; it._mod=Object.keys(p).some(k=>!PERSONAL.includes(k)); it._ckmod=!!p.checklist;
    m.set(id,it);
  });
  Object.values(ov.custom||{}).forEach(c=>{ const it=normalize(c); it._custom=true; m.set(it.id,it); });
  S.items=m;
}
function diffPatch(clean,sh){
  const p={};
  Object.keys(clean).forEach(k=>{
    if(['id','updatedAt','en'].includes(k)||k[0]==='_') return;
    if(k==='checklist'){ if(!same(clean.checklist.map(c=>c.t),(sh.checklist||[]).map(c=>c.t))) p.checklist=clean.checklist.map(c=>({t:c.t,d:false})); return; }
    if(!same(clean[k],sh[k])) p[k]=clean[k];
  });
  return p;
}
function saveItem(it){
  const clean=normalize(stripMeta(it)); clean.updatedAt=new Date().toISOString();
  const id=clean.id, sh=S.shared.get(id), ov=S.ov;
  if(ov.custom[id]||!sh){ clean.en=null; ov.custom[id]=clean; }
  else{
    const ticks=clean.checklist.filter(c=>c.d).map(c=>c.t);
    if(ticks.length) ov.ticks[id]=ticks; else delete ov.ticks[id];
    const pp=diffPatch(clean,sh);
    if(Object.keys(pp).length) ov.patches[id]=pp; else delete ov.patches[id];
  }
  recompute(); saveOverlay(); markSaved();
}
function deleteItem(id){ const ov=S.ov; if(ov.custom[id]) delete ov.custom[id]; else if(!ov.hidden.includes(id)) ov.hidden.push(id); recompute(); saveOverlay(); }
function resetItem(id){ delete S.ov.patches[id]; delete S.ov.ticks[id]; recompute(); saveOverlay(); }
let ovT;
function saveOverlay(){
  lsSet(OV_KEY,S.ov);
  if(S.ovStore!=='db'||!db||!S.uid) return;
  clearTimeout(ovT);
  ovT=setTimeout(()=>{ const path='data/users/'+S.uid+'/overlay'; queueWrite(path,()=>db.doc(path).set(JSON.parse(JSON.stringify({...S.ov,updatedAt:new Date().toISOString()})))); },600);
}
function normOv(o){ o=o||{}; return {patches:o.patches&&typeof o.patches==='object'?o.patches:{}, custom:o.custom&&typeof o.custom==='object'?o.custom:{}, hidden:Array.isArray(o.hidden)?o.hidden:[], ticks:o.ticks&&typeof o.ticks==='object'?o.ticks:{}}; }
let savedT;
function markSaved(){ const el=document.getElementById('savedLbl'); if(el){ el.textContent=t('saved'); clearTimeout(savedT); savedT=setTimeout(()=>{ el.textContent=''; },1500);} }

/* ---------------- "Nouveau / Modifié" : suivi des changements de la base ---------------- */
function sig(it){ return JSON.stringify([it.title,it.date,it.startDate,it.timeStart,it.timeEnd,it.room,it.description,it.dateNote,it.evaluation,it.examFormat,(it.links||[]).map(l=>l.url),(it.checklist||[]).map(c=>c.t)]); }
function trackChanges(){
  const now=new Date().toISOString();
  let seen=lsGet(SEEN_KEY,null);
  if(!seen||!seen.items){ seen={items:{}}; S.shared.forEach((it,id)=>{ seen.items[id]={h:sig(it)}; }); }
  else{
    S.shared.forEach((it,id)=>{
      const s=seen.items[id], h=sig(it);
      if(!s){ seen.items[id]={h,ch:'new',at:now,ack:false}; }
      else if(s.h!==h){
        let old={}; try{ const a=JSON.parse(s.h); old={date:a[1],timeStart:a[3],timeEnd:a[4],room:a[5]}; }catch(e){}
        seen.items[id]={h,ch:s.ch==='new'&&!s.ack?'new':'mod',at:now,ack:false,prev:old};
      }
    });
  }
  S.seen=seen; lsSet(SEEN_KEY,seen);
}
function chInfo(id){ const s=S.seen&&S.seen.items[id]; if(!s||!s.ch) return null; if((Date.now()-new Date(s.at))/864e5>21) return null; return s; }
function badge(it){ const s=chInfo(it.id); if(!s||s.ack) return ''; return `<span class="nbadge ${s.ch==='mod'?'mod':''}">${t(s.ch==='mod'?'upd_mod':'upd_new')}</span>`; }
function ackSeen(id){ const s=S.seen&&S.seen.items[id]; if(s&&s.ch&&!s.ack){ s.ack=true; lsSet(SEEN_KEY,S.seen); } }
function changeText(it,s){
  if(s.ch==='new') return '';
  const p=s.prev||{}, out=[];
  if(p.date!==undefined&&p.date!==it.date) out.push(t('upd_date',{a:p.date?fmt(p.date,DM):t('tbd'),b:it.date?fmt(it.date,DM):t('tbd')}));
  const ot=p.timeStart?(p.timeStart+(p.timeEnd?'–'+p.timeEnd:'')):'', nt=timeTxt(it);
  if(p.timeStart!==undefined&&ot!==nt) out.push(t('upd_time',{a:ot||'—',b:nt||'—'}));
  if(p.room!==undefined&&p.room!==it.room) out.push(t('upd_room',{a:p.room||'—',b:it.room||'—'}));
  return out.join(' · ')||t('upd_other');
}

/* ---------------- Mon groupe ---------------- */
function groupForItem(it){
  const g=S.groups.find(g=>Array.isArray(g.items)&&g.items.includes(it.id)); if(!g) return null;
  const name=S.myGroup[g.id]; const gr=name&&(g.groups||[]).find(x=>x.name===name);
  return {set:g, group:gr||null};
}

/* ---------------- Data loading ---------------- */
async function initData(){
  S.ov=normOv(lsGet(OV_KEY,null)); S.myGroup=lsGet(GRP_KEY,{})||{};
  let gotDb=false, user=null;
  if(window.claude&&typeof window.claude.use==='function'){
    try{ db=await window.claude.use('db'); }catch(e){ db=null; }
    try{ downloads=await window.claude.use('downloads'); }catch(e){ downloads=null; }
    try{ user=await window.claude.use('user'); }catch(e){ user=null; }
    if(user){ try{ S.uid=await user.id(); }catch(e){ S.uid=null; } }
  }
  if(db){
    gotDb=true; S.mode='db';
    if(S.uid){
      try{
        const snap=await db.doc('data/users/'+S.uid+'/overlay').get();
        S.ovStore='db';
        if(snap.exists){ S.ov=normOv(snap.data()); lsSet(OV_KEY,S.ov); }
        else{ const o=S.ov; if(Object.keys(o.patches).length||Object.keys(o.custom).length||o.hidden.length||Object.keys(o.ticks).length) saveOverlay(); }
      }catch(e){ S.ovStore='local'; }
    }
    let settled=false;
    const timer=setTimeout(()=>{ if(!settled){ S.stale=true; render(); } },10000);
    db.collection('items').onSnapshot(snap=>{
      const m=new Map(); snap.docs.forEach(d=>{ const v=d.data(); if(v){ const n=normalize({...v,id:d.id}); m.set(d.id,n);} });
      S.shared=m; recompute();
      if(!snap.metadata.fromCache){ settled=true; clearTimeout(timer); S.stale=false; S.loaded=true; trackChanges(); }
      render(true);
    }, ()=>{ settled=true; clearTimeout(timer); S.stale=true; render(); });
    db.collection('categories').onSnapshot(snap=>{ const o={}; snap.docs.forEach(d=>{ const v=d.data(); if(v) o[d.id]=v; }); S.cats=o; render(true); },()=>{});
    db.collection('config').onSnapshot(snap=>{ snap.docs.forEach(d=>{ if(d.id==='alternance') S.alt=d.data()||null; }); render(true); },()=>{});
    db.collection('groups').onSnapshot(snap=>{ S.groups=snap.docs.map(d=>({id:d.id,...(d.data()||{})})).sort((a,b)=>(a.order||0)-(b.order||0)); render(true); },()=>{});
  }
  if(!gotDb){
    S.mode='local'; S.ovStore='local';
    let data=null;
    try{ const r=await fetch('data/base.json',{cache:'no-cache'}); if(r.ok) data=await r.json(); }catch(e){}
    if(!data) data=lsGet(LS_KEY,null);
    if(data){ (data.items||[]).forEach(i=>{ const n=normalize(i); S.shared.set(n.id,n); }); S.cats=data.categories||data.cats||{}; S.groups=data.groups||[]; S.alt=data.alternance||null; }
    recompute(); S.loaded=true; trackChanges(); render();
  }
}

/* ---------------- Router ---------------- */
const VIEWS=['dashboard','timeline','gantt','calendar'];
function route(){
  const h=(location.hash||'').replace('#','');
  if(VIEWS.includes(h)) S.view=h; else if(h.startsWith('cat-')&&CAT[h.slice(4)]) S.view=h; else S.view='dashboard';
  document.getElementById('side').classList.remove('on');
  render(); window.scrollTo(0,0);
}

/* ---------------- Render ---------------- */
function render(fromSnap){
  document.documentElement.lang=LANG;
  renderSide(); renderBnav();
  const v=S.view, el=document.getElementById('view');
  const ttl=document.getElementById('ttl'), sub=document.getElementById('sub');
  const nb=document.getElementById('btnNew'); nb.innerHTML='＋ <span class="newlbl">'+esc(t('new_item'))+'</span>';
  const q=document.getElementById('q'); if(q.placeholder!==t('search_ph')) q.placeholder=t('search_ph');
  let html='';
  if(S.stale) html+=`<div class="banner">${esc(t('offline'))}</div>`;
  if(v!=='dashboard') html+=warnBox(false);
  if(v==='dashboard'){ ttl.textContent=t('nav_dash'); sub.textContent=fmt(iso(today0()),FULL); html+=viewDashboard(); }
  else if(v==='timeline'){ ttl.textContent=t('nav_tl'); sub.textContent=t('sub_tl'); html+=viewTimeline(); }
  else if(v==='gantt'){ ttl.textContent=t('nav_gantt'); sub.textContent=t('sub_gantt'); html+=viewGantt(); }
  else if(v==='calendar'){ ttl.textContent=t('nav_cal'); sub.textContent=t('sub_cal'); html+=viewCalendar(); }
  else { const c=CAT[v.slice(4)]; ttl.textContent=cname(c.key); sub.textContent=t('sub_cat'); html+=viewCategory(c); }
  const ae=document.activeElement;
  if(fromSnap&&ae&&el.contains(ae)&&ae.matches('input,textarea,select')) return;
  el.innerHTML=html; afterRender(el);
  if(S.openId&&fromSnap){ const it=S.items.get(S.openId); if(!it) closeDrawer(); else if(!document.getElementById('drawer').contains(document.activeElement)) renderDrawer(); }
}
function renderSide(){
  const navBtn=(v,ico,label)=>`<a class="nav ${S.view===v?'on':''}" href="#${v}"><span class="ico">${ico}</span>${esc(label)}</a>`;
  const modeTxt=S.stale?`<div class="mode warn"><i></i>${esc(t('offline'))}</div>`:`<div class="mode ok"><i></i>${esc(t(S.ovStore==='db'?'saved_acct':'saved_local'))}</div>`;
  const nh=(S.ov.hidden||[]).filter(id=>S.shared.has(id)).length;
  document.getElementById('side').innerHTML=`
    <div class="brand"><div class="logo">M2</div><div><b>Rétroplanning</b><span>${esc(t('app_sub'))}</span></div></div>
    ${navBtn('dashboard','◧',t('nav_dash'))}${navBtn('timeline','≡',t('nav_tl'))}${navBtn('gantt','▤',t('nav_gantt'))}${navBtn('calendar','▦',t('nav_cal'))}
    <div class="navlabel">${esc(t('nav_cats'))}</div>
    ${CATEGORIES.map(c=>`<a class="nav ${S.view==='cat-'+c.key?'on':''}" href="#cat-${c.key}"><span class="dot" style="background:${c.color}"></span>${esc(cname(c.key))}<span class="count">${byCat(c.key).length||''}</span></a>`).join('')}
    <div class="sidefoot">
      ${calUrl()?`<button class="btn sm pri" data-a="subscribe">${esc(t('sub_btn'))}</button>`:''}
      ${ICS_OK()?`<button class="btn sm" data-a="agall">${esc(t('agenda_all_dl'))}</button>`:''}
      ${nh?`<button class="btn sm ghost" data-a="unhide">${esc(t('unhide',{n:nh}))}</button>`:''}
      <div class="seg" style="width:100%" role="group" aria-label="${esc(t('lang'))}"><button style="flex:1" class="${LANG==='fr'?'on':''}" data-a="lang" data-v="fr">🇫🇷 Français</button><button style="flex:1" class="${LANG==='en'?'on':''}" data-a="lang" data-v="en">🇬🇧 English</button></div>
      ${modeTxt}
    </div>`;
}
function renderBnav(){
  const b=(v,i,l)=>`<a href="#${v}" class="${S.view===v?'on':''}"><span class="i">${i}</span>${esc(l)}</a>`;
  document.getElementById('bnav').innerHTML=b('dashboard','◧',t('bn_home'))+b('timeline','≡',t('bn_tl'))+b('gantt','▤',t('bn_gantt'))+b('calendar','▦',t('bn_cal'))+`<button data-a="burger" class="${S.view.startsWith('cat-')?'on':''}"><span class="i">☰</span>${esc(t('bn_cats'))}</button>`;
}

/* ---- Rows / cards ---- */
function chkBtn(it){
  const on=it.status==='done';
  return `<button class="chk ${on?'on':''}" data-a="valid" data-id="${esc(it.id)}" title="${esc(t(on?'chk_title_on':'chk_title'))}" aria-label="${esc(t(on?'chk_title_on':'chk_title'))}">✓</button>`;
}
function grpTag(it){ const g=groupForItem(it); return g&&g.group?`<span class="gtag">👥 ${esc(g.group.name)}</span>`:''; }
function liRow(it,opts){
  const c=CAT[it.category], u=urgency(it);
  const meta=[ (opts&&opts.noDate)?'':fmt(it.date,SHORT), timeTxt(it), it.room?'📍 '+it.room:'' ].filter(Boolean).join(' · ');
  return `<div class="li" data-open="${esc(it.id)}">${chkBtn(it)}<span class="cbar" style="background:${c.color}"></span>
    <div class="main2"><div class="tt">${esc(L(it,'title'))} ${badge(it)}</div><div class="mm">${esc(cshort(it.category))}${meta?' · '+esc(meta):''} ${grpTag(it)}</div></div>
    <span class="pill ${u.cls} hide-m"><i></i>${esc(u.label)}</span><span class="days" style="color:${u.color}">${esc(daysTxt(it))}</span></div>`;
}

/* ---- Dashboard ---- */
const DRIVE_URL='https://drive.google.com/drive/folders/15vdoUGWbXYJexZFDpUVsWcRoS7j3CDrW?usp=share_link';
function warnBox(full){
  return full?`<div class="warnbox" role="alert"><div class="wi">⚠️</div><div><b class="wt">${esc(t('warn_t'))}</b><div>${t('warn_p')}</div></div></div>`
    :`<div class="warnline" role="note">⚠️ ${t('warn_s')}</div>`;
}
function viewDashboard(){
  if(!S.loaded) return `<div class="empty">${esc(t('loading'))}</div>`;
  const items=allItems();
  if(!items.length) return `<div class="card empty"><b>${esc(t('empty_t'))}</b>${esc(t('empty_p'))}</div>`;
  const notDone=items.filter(i=>i.status!=='done');
  const done=items.length-notDone.length, doing=items.filter(i=>i.status==='doing').length;
  const past=notDone.filter(i=>i.date&&daysLeft(i.date)<0&&!isExam(i));
  const upcoming=notDone.filter(i=>i.date&&daysLeft(i.date)>=0);
  const soon=upcoming.filter(i=>daysLeft(i.date)<=14);
  const undated=notDone.filter(i=>!i.date);
  const next=upcoming[0], pct=items.length?Math.round(done/items.length*100):0;
  // welcome
  let welcome=''; if(!lsGet('rp-welcome-v2',false)) welcome=`<div class="card panel" style="margin-bottom:14px;border-color:#c7d2fe;background:#f8faff"><h3>${esc(t('welcome_t'))}<span class="sp"></span><button class="btn ghost sm" data-a="welcome">${esc(t('hide'))}</button></h3>
    <div style="font-size:13px;color:#374151">${t('welcome_p')}</div>
    <div class="box info" style="background:#fff;border-color:#e0e7ff">${t('welcome_fav')}</div>
    <div class="hint" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span>${esc(t('welcome_hint'))}</span>${calUrl()?`<button class="btn sm pri" data-a="subscribe">${esc(t('sub_btn'))}</button>`:''}</div></div>`;
  // soon
  let soonHtml='';
  if(soon.length){
    const byDay=new Map(); soon.forEach(i=>{ if(!byDay.has(i.date)) byDay.set(i.date,[]); byDay.get(i.date).push(i); });
    byDay.forEach((arr,d)=>{ const n=daysLeft(d); soonHtml+=`<div class="soonday"><span class="d">${esc(fmt(d,{weekday:'long',day:'numeric',month:'long'}))}</span><span class="pill ${n<=7?'u-red':'u-orange'}">${esc(n===0?t('d_today'):t('d_days',{n}))}</span></div><div class="list">${arr.map(i=>liRow(i,{noDate:true})).join('')}</div>`; });
  } else {
    soonHtml=`<div class="mm" style="font-size:13px;color:var(--muted)">${esc(t('soon_none'))} ${next?t('soon_next',{t:esc(L(next,'title')),d:esc(fmt(next.date,SHORT)),n:esc(daysTxt(next))}):''}</div>`;
  }
  // updates
  const upd=items.filter(i=>chInfo(i.id)).sort((a,b)=>chInfo(b.id).at.localeCompare(chInfo(a.id).at)).slice(0,6);
  const updHtml=upd.length?`<div class="card panel upd"><h3>${esc(t('upd_t'))}</h3><div class="list">${upd.map(i=>{ const s=chInfo(i.id); const w=changeText(i,s); return `<div class="li" data-open="${esc(i.id)}"><span class="nbadge ${s.ch==='mod'?'mod':''}">${esc(t(s.ch==='mod'?'upd_mod':'upd_new'))}</span><div class="main2"><div class="tt">${esc(L(i,'title'))}</div><div class="what">${esc(cshort(i.category))}${w?' · '+esc(w):''} · ${esc(t('upd_on',{d:fmt(s.at.slice(0,10),DM)}))}</div></div></div>`; }).join('')}</div></div>`:'';
  const pastHtml=past.length?`<div class="card panel"><h3>${esc(t('past_t'))} <span class="pill u-past">${past.length}</span></h3><div class="hint" style="margin:-6px 0 6px">${esc(t('past_hint'))}</div><div class="list">${past.slice(-6).reverse().map(i=>liRow(i)).join('')}</div></div>`:'';
  const kpi=(l,v,col)=>`<div class="card kpi"><div class="l">${col?`<i style="background:${col}"></i>`:''}${esc(l)}</div><div class="v">${v}</div></div>`;
  let nextHtml='';
  if(next){ const u=urgency(next), c=CAT[next.category], n=daysLeft(next.date);
    nextHtml=`<div class="card next" data-open="${esc(next.id)}"><div class="big ${u.cls}"><b>${n}</b><span>${esc(t('days_word'))}</span></div>
      <div style="min-width:0"><div class="sec" style="margin:0 0 4px">${esc(t('next_t'))}</div><div class="t">${esc(L(next,'title'))}</div>
      <div class="d">${esc(fmt(next.date,FULL))}${timeTxt(next)?' · '+esc(timeTxt(next)):''}</div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap"><span class="tag" style="background:${c.hex}1a;color:${c.hex}">${esc(cname(c.key))}</span><span class="pill ${u.cls}"><i></i>${esc(u.label)}</span>${next.dateConfidence==='provisoire'?`<span class="flag">${esc(t('provisional'))}</span>`:''}</div></div></div>`;
  } else nextHtml=`<div class="card next"><div class="d">${esc(t('next_none'))}</div></div>`;
  const driveHtml=DRIVE_URL?`<a class="card drivebar" href="${esc(DRIVE_URL)}" target="_blank" rel="noopener"><span class="di">📁</span><span style="flex:1;min-width:0"><b>${esc(t('drive_t'))}</b><span class="ds">${esc(t('drive_s'))}</span></span><span class="btn sm pri">${esc(t('drive_btn'))} ↗</span></a>`:'';
  return `${warnBox(true)}${welcome}${driveHtml}
  <div class="card panel" style="margin-bottom:14px"><h3>${esc(t('soon_t'))}<span class="sp"></span><a href="#timeline" class="btn ghost sm">${esc(t('see_all'))}</a></h3>${soonHtml}</div>
  ${updHtml||pastHtml?`<div class="grid row2" style="margin:0 0 14px">${updHtml||'<div></div>'}${pastHtml||'<div></div>'}</div>`:''}
  <div class="grid kpis">${kpi(t('k_total'),items.length)}${kpi(t('k_done'),done,'var(--green)')}${kpi(t('k_doing'),doing,'var(--blue)')}${kpi(t('k_up'),upcoming.length,'var(--orange)')}${kpi(t('k_past'),past.length,'#d97706')}</div>
  <div class="grid row2">
    <div style="display:flex;flex-direction:column;gap:14px">${nextHtml}
      <div class="card panel"><h3>${esc(t('upcoming_t'))}<span class="sp"></span><a href="#timeline" class="btn ghost sm">${esc(t('see_all'))}</a></h3><div class="list">${upcoming.slice(0,7).map(i=>liRow(i)).join('')||`<div class="mm">${esc(t('nothing'))}</div>`}</div></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="card panel"><h3>${esc(t('prog_t'))}<span class="sp"></span><span style="font-size:20px;font-weight:650">${pct}%</span></h3>
        <div class="bar"><i style="width:${pct}%"></i></div><div class="mm" style="margin-top:6px;color:var(--muted);font-size:12px">${esc(t('prog_sub',{a:done,b:items.length}))}</div>
        <div class="sec">${esc(t('by_cat'))}</div>
        <div class="catprog">${CATEGORIES.map(c=>{ const a=byCat(c.key), d=a.filter(i=>i.status==='done').length, p=a.length?Math.round(d/a.length*100):0;
          return `<a href="#cat-${c.key}" style="color:inherit;text-decoration:none"><div class="h"><b style="font-weight:500">${esc(cname(c.key))}</b><span>${a.length?`${d}/${a.length}`:esc(t('waiting'))}</span></div><div class="bar"><i style="width:${p}%;background:${c.color}"></i></div></a>`; }).join('')}</div></div>
      ${undated.length?`<div class="card panel"><h3>${esc(t('undated_t'))} <span class="pill u-gray">${undated.length}</span></h3><div class="list">${undated.slice(0,6).map(i=>liRow(i)).join('')}</div></div>`:''}
    </div>
  </div>
  <div class="legend"><span><i style="background:var(--red)"></i>${esc(t('leg_urgent'))}</span><span><i style="background:var(--orange)"></i>${esc(t('leg_soon'))}</span><span><i style="background:#d97706"></i>${esc(t('leg_past'))}</span><span><i style="background:var(--blue)"></i>${esc(t('leg_doing'))}</span><span><i style="background:var(--green)"></i>${esc(t('leg_done'))}</span><span><i style="background:var(--gray)"></i>${esc(t('leg_tbd'))}</span></div>`;
}

/* ---- Timeline ---- */
function filterBar(){
  return `<div class="toolbar">${CATEGORIES.map(c=>`<button class="chip ${S.filters.has(c.key)?'on':''}" data-a="filt" data-k="${c.key}"><i style="background:${c.color}"></i>${esc(cshort(c.key))}</button>`).join('')}
    <span style="flex:1"></span><button class="chip ${S.hideDone?'on':''}" data-a="hidedone">${esc(t('hide_done'))}</button></div>`;
}
function viewTimeline(){
  const items=allItems().filter(i=>S.filters.has(i.category)&&!(S.hideDone&&i.status==='done'));
  const dated=items.filter(i=>i.date), undated=items.filter(i=>!i.date);
  const groups=new Map(); dated.forEach(i=>{ const k=i.date.slice(0,7); if(!groups.has(k)) groups.set(k,[]); groups.get(k).push(i); });
  const nowK=iso(today0()).slice(0,7);
  const mLabel=k=>{ const [y,m]=k.split('-').map(Number); return new Date(y,m-1,1).toLocaleDateString(LOC(),{month:'long',year:'numeric'}); };
  const months=[...groups.keys()];
  let html=filterBar();
  if(!items.length) return html+`<div class="card empty"><b>${esc(t('no_items'))}</b>${esc(t('empty_filter'))}</div>`;
  html+=`<div class="months">${months.map(k=>`<button class="chip ${k===nowK?'on':''}" data-a="jump" data-k="${k}" style="text-transform:capitalize">${esc(mLabel(k))}</button>`).join('')}${undated.length?`<button class="chip" data-a="jump" data-k="undated">${esc(t('tbd'))} (${undated.length})</button>`:''}</div>`;
  const todayIso=iso(today0()); let shown=false;
  const tline=()=>{ shown=true; return `<div class="todayline">${esc(t('d_today'))} · ${esc(fmt(todayIso,{day:'numeric',month:'long'}))}</div>`; };
  months.forEach(k=>{
    if(!shown&&k>nowK) html+=`<div class="tl" style="margin-bottom:8px">${tline()}</div>`;
    html+=`<section class="tl-month" id="m-${k}"><h4>${esc(mLabel(k))}${k===nowK?`<span class="now">${esc(t('month_now'))}</span>`:''}</h4><div class="tl">`;
    groups.get(k).forEach(it=>{ if(!shown&&k===nowK&&it.date>=todayIso) html+=tline(); html+=tlItem(it); });
    if(!shown&&k===nowK) html+=tline();
    html+=`</div></section>`;
  });
  if(undated.length) html+=`<section class="tl-month" id="m-undated"><h4 style="text-transform:none">${esc(t('undated_t'))}</h4><div class="tl">${undated.map(tlItem).join('')}</div></section>`;
  return html;
}
function tlItem(it){
  const c=CAT[it.category], u=urgency(it), d=parseD(it.date), dn=L(it,'dateNote');
  return `<div class="tl-item"><span class="node" style="background:${u.color}"></span>
    <div class="card ev" data-open="${esc(it.id)}">
      <div class="date">${d?`<b>${d.getDate()}</b><span>${esc(d.toLocaleDateString(LOC(),{month:'short'}))}</span>`:'<span>—</span>'}</div>
      <div class="body"><div class="tt">${esc(L(it,'title'))} ${badge(it)}</div>
        <div class="meta"><span class="tag" style="background:${c.hex}1a;color:${c.hex}">${esc(cshort(c.key))}</span>
        ${timeTxt(it)?`<span style="font-size:12px;font-weight:600">🕘 ${esc(timeTxt(it))}</span>`:''}
        ${it.room?`<span style="font-size:12px;color:var(--muted)">📍 ${esc(it.room)}</span>`:''}
        ${it.dateConfidence==='provisoire'?`<span class="flag">${esc(t('provisional'))}</span>`:''}
        ${grpTag(it)}
        ${it.checklist.length?`<span style="font-size:12px;color:var(--muted)">☑ ${it.checklist.filter(x=>x.d).length}/${it.checklist.length}</span>`:''}
        ${dn?`<span style="font-size:12px;color:var(--muted)">${esc(dn)}</span>`:''}</div></div>
      <div class="right"><span class="pill ${u.cls}"><i></i>${esc(u.label)}</span><span style="display:flex;gap:10px;align-items:center"><span class="days" style="color:${u.color}">${esc(daysTxt(it))}</span>${chkBtn(it)}</span></div>
    </div></div>`;
}

/* ---- Calendar ---- */
let ALT_SRC=null, ALT_MAP={};
function altDay(k){
  const A=S.alt; if(!A||!Array.isArray(A.days)) return null;
  if(ALT_SRC!==A){ ALT_SRC=A; ALT_MAP={}; A.days.forEach(x=>{ if(x&&x.d) ALT_MAP[x.d]=x; }); }
  const x=ALT_MAP[k];
  if(x){ if(x.k==='eval'||x.k==='casfinal') return {d:k,k:'ecole',e:x.e}; if(x.k==='mixte') return {d:k,k:'ent'}; return x; }
  if(k<A.from||k>A.to) return null; const wd=parseD(k).getDay(); if(wd===0||wd===6) return null;
  return {d:k,k:'ent'};
}
function altShort(a){ if(a.k==='ferie') return t('alt_ferie'); if(a.k==='ent') return t('alt_ent_s'); return (a.l||t('alt_'+a.k))+(a.e?' +':''); }
function altTitle(a){ let s=a.k==='ent'?t('alt_ent'):t('alt_'+a.k); if(a.l) s+=' — '+a.l; if(a.e) s+=' '+t('alt_plus_eval'); return s+' · '+t('alt_src_s'); }
function viewCalendar(){
  if(!S.calMonth){ const d=today0(); S.calMonth=new Date(d.getFullYear(),d.getMonth(),1); }
  const m=S.calMonth, y=m.getFullYear(), mo=m.getMonth();
  const first=new Date(y,mo,1), off=(first.getDay()+6)%7, start=new Date(y,mo,1-off);
  const items=allItems().filter(i=>i.date&&S.filters.has(i.category)&&!(S.hideDone&&i.status==='done'));
  const byDay={}; items.forEach(i=>{ (byDay[i.date]=byDay[i.date]||[]).push(i); });
  const tIso=iso(today0()), last=new Date(y,mo+1,0), cells=Math.ceil((off+last.getDate())/7)*7;
  const mon=monday(today0());
  let g=[0,1,2,3,4,5,6].map(i=>`<div class="dow">${esc(addDays(mon,i).toLocaleDateString(LOC(),{weekday:'short'}))}</div>`).join('');
  for(let i=0;i<cells;i++){
    const d=addDays(start,i), k=iso(d);
    const evs=(byDay[k]||[]).map(it=>{ const c=CAT[it.category]; return `<div class="evc ${it.status==='done'?'done':''}" data-open="${esc(it.id)}" title="${esc((timeTxt(it)?timeTxt(it)+' · ':'')+L(it,'title'))}" style="background:${c.hex}14;border-color:${c.hex};color:${c.hex}">${it.timeStart?`<b>${esc(it.timeStart)}</b> `:''}${esc(L(it,'title'))}</div>`; }).join('');
    const a=S.showAlt?altDay(k):null;
    const at=a?`<span class="alt a-${a.k}" title="${esc(altTitle(a))}">${esc(altShort(a))}</span>`:'';
    g+=`<div class="cell ${d.getMonth()!==mo?'out':''} ${k===tIso?'today':''} ${a?'ac-'+a.k:''}"><div class="ch"><span class="n">${d.getDate()}</span>${at}</div>${evs}</div>`;
  }
  const monthItems=items.filter(i=>{ const d=parseD(i.date); return d.getFullYear()===y&&d.getMonth()===mo; });
  let altHtml='';
  if(S.alt&&Array.isArray(S.alt.days)){
    const key0=`${y}-${String(mo+1).padStart(2,'0')}`, md=S.alt.days.filter(x=>x.d.slice(0,7)===key0&&x.k!=='ferie'&&x.k!=='mixte');
    altHtml=`<div class="altbar"><button class="btn sm ${S.showAlt?'pri':''}" data-a="togalt">🎓 ${esc(t(S.showAlt?'alt_hide':'alt_show'))}</button>
      ${S.showAlt?`<span class="altleg"><span class="alt a-ecole">${esc(t('alt_ecole'))}</span><span class="alt a-ent">${esc(t('alt_ent'))}</span><span class="alt a-ferie">${esc(t('alt_ferie'))}</span></span>
      <span class="altn">${esc(t('alt_count',{n:md.length}))}</span>`:''}</div>
      ${S.showAlt?`<div class="hint" style="margin:-4px 0 10px">${esc(t('alt_src'))}</div>`:''}`;
  }
  const key=`${y}-${String(mo+1).padStart(2,'0')}`, nx=allItems().find(i=>i.date&&i.date.slice(0,7)>key&&S.filters.has(i.category));
  return `${filterBar()}
  <div class="calhead"><h2>${esc(first.toLocaleDateString(LOC(),{month:'long',year:'numeric'}))}</h2>
    <button class="btn sm" data-a="calprev" aria-label="${esc(t('cal_prev'))}">‹</button><button class="btn sm" data-a="caltoday">${esc(t('d_today'))}</button><button class="btn sm" data-a="calnext" aria-label="${esc(t('cal_next'))}">›</button>
    <span style="flex:1"></span>${nx?`<button class="btn ghost sm" data-a="calgo" data-k="${nx.date.slice(0,7)}">${esc(t('next_month_btn',{d:fmt(nx.date,{month:'short',year:'numeric'})}))}</button>`:''}</div>
  ${altHtml}<div class="cal">${g}</div>
  <div class="card panel" style="margin-top:14px"><h3>${esc(t('this_month'))} <span class="pill u-neutral">${monthItems.length}</span></h3><div class="list">${monthItems.map(i=>liRow(i)).join('')||`<div class="mm" style="color:var(--muted)">${esc(t('none_month'))}</div>`}</div></div>`;
}

/* ---- Category ---- */
function viewCategory(c){
  const items=byCat(c.key), done=items.filter(i=>i.status==='done').length, pct=items.length?Math.round(done/items.length*100):0;
  const notes=(CM(c.key,'notes')||'').split('\n').map(s=>s.trim()).filter(Boolean), links=(S.cats[c.key]||{}).links||[], intro=CM(c.key,'intro'), src=(S.cats[c.key]||{}).source;
  const grpSets=S.groups.filter(g=>g.category===c.key), tab=S.catTab[c.key]||'list';
  let html=`<div class="cathead"><div class="sw" style="background:${c.color}">${c.letter}</div>
    <div><h2>${esc(cname(c.key))}</h2><p>${items.length?esc(t(c.key==='partiels'?'done_n_exam':'done_n',{a:done,b:items.length,p:pct})):esc(t('waiting'))}</p></div><span class="sp"></span>
    <button class="btn pri" data-a="newin" data-k="${c.key}">＋ ${esc(t('new_item'))}</button></div>`;
  if(items.length) html+=`<div class="bar" style="margin:-6px 0 18px"><i style="width:${pct}%;background:${c.color}"></i></div>`;
  if(intro) html+=`<div class="card notes" style="background:#fbfbff;border-color:#e0e7ff"><div style="font-size:13px;color:#374151"><b style="font-weight:600">${esc(t('cat_what'))}</b> ${esc(intro)}</div></div>`;
  if(notes.length||links.length) html+=`<div class="card notes"><h3 style="margin:0 0 10px;font-size:13px">${esc(t('keyinfo'))}</h3><ul>${notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>
      ${links.length?`<div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">${links.map(l=>`<a href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">↗ ${esc(l.label||l.url)}</a>`).join('')}</div>`:''}
      ${src?`<div class="src">${esc(t('source'))} : ${esc(src)}</div>`:''}</div>`;
  if(!items.length&&!grpSets.length) return html+`<div class="card empty"><b>${esc(t('cat_empty_t'))}</b>${esc(t('cat_empty_p'))}</div>`;
  html+=`<div style="display:flex;align-items:center;gap:10px;margin:4px 0 14px;overflow-x:auto"><div class="seg"><button class="${tab==='list'?'on':''}" data-a="ctab" data-k="${c.key}" data-v="list">${esc(t(c.key==='partiels'?'tab_exams':'tab_list'))}</button><button class="${tab==='gantt'?'on':''}" data-a="ctab" data-k="${c.key}" data-v="gantt">${esc(t('tab_gantt'))}</button>${grpSets.map(g=>`<button class="${tab==='grp-'+g.id?'on':''}" data-a="ctab" data-k="${c.key}" data-v="grp-${esc(g.id)}">👥 ${esc(GL(g,'tab')||t('tab_groups'))}</button>`).join('')}</div></div>`;
  if(tab.startsWith('grp-')){ const g=grpSets.find(x=>'grp-'+x.id===tab); if(g) return html+groupsView(g); }
  if(tab==='gantt') return html+ganttBlock([c.key],false);
  if(c.key==='partiels') return html+examList(items);
  const off=items.filter(i=>!i._custom), mine=items.filter(i=>i._custom);
  if(off.length) html+=`<div class="sec">${esc(t('sec_official'))}</div>`+off.map((it,i)=>stepCard(it,i+1)).join('');
  if(mine.length) html+=`<div class="sec">${esc(t('sec_mine'))}</div>`+mine.map((it,i)=>stepCard(it,off.length+i+1)).join('');
  return html;
}
function groupsView(g){
  const q=(S.gq||'').trim().toLowerCase(), mine=S.myGroup[g.id];
  let list=(g.groups||[]).filter(gr=>!q||gr.name.toLowerCase().includes(q)||(gr.members||[]).some(m=>m.toLowerCase().includes(q)));
  list=list.slice().sort((a,b)=>(b.name===mine)-(a.name===mine));
  return `<div class="card panel" style="margin-bottom:14px"><h3>${esc(GL(g,'title')||t('tab_groups'))}<span class="sp"></span><span class="pill u-neutral">${esc(t('grp_n',{n:(g.groups||[]).length}))}</span></h3>
    ${GL(g,'intro')?`<div style="font-size:13px;color:var(--muted);margin-bottom:10px">${esc(GL(g,'intro'))}</div>`:''}
    <input class="inp" id="gsearch" placeholder="${esc(t('grp_search'))}" value="${esc(S.gq)}" style="width:100%;max-width:360px">
    ${g.source?`<div class="hint">${esc(t('source'))} : ${esc(g.source)}</div>`:''}</div>
  <div class="grid ggrid" style="grid-template-columns:repeat(auto-fill,minmax(230px,1fr))">${list.map(gr=>{ const me=gr.name===mine; return `<div class="card gcard ${me?'mine':''}"><div class="gh"><b>${esc(gr.name)}</b><button class="btn sm ${me?'vbtn on':''}" data-a="mygrp" data-g="${esc(g.id)}" data-n="${esc(gr.name)}">${esc(t(me?'grp_mine':'grp_set'))}</button></div>${(gr.members||[]).map(m=>`<div style="font-size:13px;padding:2px 0;${q&&m.toLowerCase().includes(q)?'background:#fef9c3;border-radius:4px;padding:2px 4px':''}">${esc(m)}</div>`).join('')}</div>`; }).join('')||`<div class="card empty">${esc(t('grp_none'))}</div>`}</div>`;
}
function examList(items){
  const groups=new Map(); items.forEach(it=>{ const k=it.date||'undef'; if(!groups.has(k)) groups.set(k,[]); groups.get(k).push(it); });
  let html='';
  groups.forEach((arr,k)=>{
    const n=k==='undef'?null:daysLeft(k);
    html+=`<div class="sec" style="display:flex;align-items:center;gap:8px;text-transform:none;letter-spacing:0;font-size:13px;color:var(--text)"><span class="cap">${esc(k==='undef'?t('tbd'):fmt(k,FULL))}</span>${n!==null&&n>=0?`<span class="pill ${n<=7?'u-red':n<=30?'u-orange':'u-neutral'}">${esc(n===0?t('d_today'):t('d_days',{n}))}</span>`:''}</div>`;
    html+=arr.map(examCard).join('');
  });
  return html;
}
function examCard(it){
  const c=CAT[it.category], u=urgency(it), isDone=it.status==='done', ev=L(it,'evaluation');
  return `<div class="card step ${isDone?'isdone':''}" style="grid-template-columns:86px 1fr auto">
    <div style="text-align:center;line-height:1.15">${it.date?`<div style="font-size:17px;font-weight:650">${esc(fmt(it.date,{day:'numeric',month:'short'}))}</div><div class="cap" style="font-size:12px;color:var(--muted)">${esc(fmt(it.date,{weekday:'long'}))}</div>`:`<div style="color:var(--faint);font-size:12px">${esc(t('tbd'))}</div>`}</div>
    <div style="min-width:0"><div class="tt" data-open="${esc(it.id)}">${esc(L(it,'title'))} ${badge(it)}</div>
      <div class="meta"><span class="pill ${u.cls}"><i></i>${esc(u.label)}</span>
        ${L(it,'examFormat')?`<span style="font-size:12px;color:var(--muted)">${esc(L(it,'examFormat'))}</span>`:''}
        ${it.room?`<span style="font-size:12px;color:var(--muted)">📍 ${esc(it.room)}</span>`:''}</div>
      <div class="hint" style="color:var(--muted)"><b style="font-weight:600">${esc(t('notation'))} :</b> ${ev?esc(ev):`<span style="color:var(--faint)">${esc(t('notation_tbd'))}</span>`}</div>
      <div class="meta">${it.links.length?`<a href="${esc(safeUrl(it.links[0].url))}" target="_blank" rel="noopener" style="font-size:12.5px;font-weight:600">📁 ${esc(t('course_folder'))} ↗</a>${it.links.length>1?`<button class="btn ghost sm" data-open="${esc(it.id)}" style="font-size:12px">📄 ${esc(t('n_docs',{n:it.links.length-1}))}</button>`:''}`:`<span style="font-size:12px;color:var(--faint)">📁 ${esc(t('no_folder'))}</span>`}
      ${L(it,'dateNote')?`<span style="font-size:12px;color:#92400e">${esc(L(it,'dateNote'))}</span>`:''}</div>
    </div>
    <div class="ctrl"><div class="r"><span class="days" style="color:${u.color}">${esc(daysTxt(it))}</span></div>
      <div class="r"><button class="btn sm vbtn ${isDone?'on':''}" data-a="valid" data-id="${esc(it.id)}">${esc(t(isDone?'passed':'mark_passed'))}</button><button class="btn sm" data-open="${esc(it.id)}">${esc(t('details'))}</button></div></div></div>`;
}
function stepCard(it,n){
  const c=CAT[it.category], u=urgency(it), ck=it.checklist, ckd=ck.filter(x=>x.d).length, isDone=it.status==='done', desc=L(it,'description'), dn=L(it,'dateNote');
  return `<div class="card step ${isDone?'isdone':''}">
    <div class="num ${isDone?'done':''}" style="background:${c.hex}14;color:${c.hex}">${isDone?'✓':n}</div>
    <div style="min-width:0"><div class="tt" data-open="${esc(it.id)}">${esc(L(it,'title'))} ${badge(it)}</div>
      ${desc?`<div class="ds" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(desc)}</div>`:''}
      <div class="meta"><span class="pill ${u.cls}"><i></i>${esc(u.label)}</span>
        <span style="font-size:12.5px;font-weight:500">📅 ${esc(it.startDate&&it.date?t('f_period',{a:fmt(it.startDate,DM),b:fmt(it.date,SHORT)}):fmt(it.date,SHORT))}${timeTxt(it)?' · '+esc(timeTxt(it)):''}</span>
        ${isDone&&it.completedAt?`<span style="font-size:12px;color:var(--green);font-weight:500">${esc(t('validated_on',{d:fmt(it.completedAt,SHORT)}))}</span>`:''}
        ${it.dateConfidence==='provisoire'?`<span class="flag">${esc(t('provisional'))}</span>`:''}
        ${grpTag(it)}
        ${ck.length?`<span style="font-size:12px;color:var(--muted)">☑ ${ckd}/${ck.length}</span>`:''}
        ${it.links.length?`<span style="font-size:12px;color:var(--muted)">📄 ${esc(t('n_docs',{n:it.links.length}))}</span>`:''}
        ${it.comments?'<span style="font-size:12px;color:var(--muted)">💬</span>':''}
      </div>
      ${dn?`<div class="hint">${esc(dn)}</div>`:''}
    </div>
    <div class="ctrl"><div class="r"><span class="days" style="color:${u.color}">${esc(daysTxt(it))}</span></div>
      <div class="r"><button class="btn sm vbtn ${isDone?'on':''}" data-a="valid" data-id="${esc(it.id)}">${esc(t(isDone?'validated':'validate'))}</button><button class="btn sm" data-open="${esc(it.id)}">${esc(t('details'))}</button></div></div></div>`;
}
function toggleDone(id){
  const it=S.items.get(id); if(!it) return;
  const c=normalize(stripMeta(JSON.parse(JSON.stringify(it)))), was=c.status==='done';
  c.status=was?'todo':'done'; c.completedAt=was?null:iso(today0());
  saveItem(c); if(S.openId===id) renderDrawer(); render();
  const tt=L(it,'title'); toast(was?t('t_unvalidated'):t('t_validated',{t:tt.length>40?tt.slice(0,40)+'…':tt}));
}

/* ---------------- Gantt ---------------- */
const ZOOM={day:30,week:10,month:3.4};
function estStart(it,list){
  if(it.startDate||!it.date||it.status==='done') return null;
  const t0=iso(today0()); if(it.date<t0) return null;
  let st=t0;
  if(it.category==='memoire'||it.category==='blocs'){
    const prev=list.filter(x=>!x._custom&&x.date&&x.date<it.date&&x.id!==it.id).pop();
    if(prev){ const nx=iso(addDays(parseD(prev.date),1)); if(nx>st) st=nx; }
  }
  return st;
}
function viewGantt(){ return filterBar()+ganttBlock(CATEGORIES.map(c=>c.key).filter(k=>S.filters.has(k)),true); }
function ganttBlock(cats,showHeaders){
  const W=ZOOM[S.zoom];
  const all=allItems().filter(i=>cats.includes(i.category)), vis=all.filter(i=>!(S.hideDone&&i.status==='done'));
  const t0=today0(); let ds=[t0]; all.forEach(i=>{ [i.startDate,i.date].forEach(x=>{ const d=parseD(x); if(d) ds.push(d); }); });
  const min=new Date(Math.min(...ds)), max=new Date(Math.max(...ds));
  let rs,re;
  if(S.zoom==='month'){ rs=new Date(min.getFullYear(),min.getMonth()-1,1); re=new Date(max.getFullYear(),max.getMonth()+2,0); }
  else { rs=monday(addDays(min,-7)); re=addDays(monday(addDays(max,21)),6); }
  const total=dDiff(rs,re)+1, TW=Math.round(total*W), X=s=>dDiff(rs,parseD(s))*W;
  let months='', cur=new Date(rs.getFullYear(),rs.getMonth(),1);
  while(cur<=re){ const a=cur<rs?rs:cur, nx=new Date(cur.getFullYear(),cur.getMonth()+1,1), b=nx>addDays(re,1)?addDays(re,1):nx; const w=dDiff(a,b)*W;
    months+=`<div style="width:${w}px;flex:none">${w>24?esc(cur.toLocaleDateString(LOC(),{month:w<60?'short':'long',year:w<90?undefined:'numeric'})):''}</div>`; cur=nx; }
  let units='', ov=''; const tIso=iso(t0);
  if(S.zoom==='day'){ for(let i=0;i<total;i++){ const d=addDays(rs,i), we=d.getDay()===0||d.getDay()===6; units+=`<div class="${we?'we':''} ${iso(d)===tIso?'td':''}" style="width:${W}px">${d.getDate()}</div>`; if(we) ov+=`<b style="left:${i*W}px;width:${W}px"></b>`; ov+=`<i class="${d.getDate()===1?'m':''}" style="left:${i*W}px"></i>`; } }
  else if(S.zoom==='week'){ for(let i=0;i<total;i+=7){ const d=addDays(rs,i); units+=`<div class="${t0>=d&&t0<addDays(d,7)?'td':''}" style="width:${7*W}px">${d.getDate()}</div>`; ov+=`<i style="left:${i*W}px"></i>`; }
    let m=new Date(rs.getFullYear(),rs.getMonth()+1,1); while(m<=re){ ov+=`<i class="m" style="left:${dDiff(rs,m)*W}px"></i>`; m=new Date(m.getFullYear(),m.getMonth()+1,1); } }
  else { let m=new Date(rs.getFullYear(),rs.getMonth(),1); while(m<=re){ ov+=`<i class="m" style="left:${Math.max(0,dDiff(rs,m))*W}px"></i>`; m=new Date(m.getFullYear(),m.getMonth()+1,1); } }
  ov+=`<div class="today" style="left:${dDiff(rs,t0)*W+(S.zoom==='day'?W/2:0)}px"></div>`;
  let rows='';
  cats.forEach(k=>{
    const c=CAT[k], list=byCat(k), shown=vis.filter(i=>i.category===k), col=S.collapsed.has(k);
    if(showHeaders){ const d=list.filter(i=>i.status==='done').length; rows+=`<div class="grow gcat ${col?'col':''}" style="--cc:${c.hex}"><div class="gl" data-a="gcol" data-k="${k}"><span class="tog">▾</span>${esc(cname(k))}<span class="cnt">${list.length?`${d}/${list.length}`:esc(t('g_waiting'))}</span></div><div class="gt" style="width:${TW}px"></div></div>`; }
    if(col) return;
    if(!shown.length&&!showHeaders) rows+=`<div class="grow"><div class="gl"><span class="nm" style="color:var(--faint)">${esc(t('g_none'))}</span></div><div class="gt" style="width:${TW}px"></div></div>`;
    shown.forEach(it=>{
      const u=urgency(it), done=it.status==='done', late=!done&&it.date&&daysLeft(it.date)<0, title=L(it,'title');
      let tr='';
      if(it.date){
        const ex=X(it.date)+W; let st=it.startDate, est=false;
        if(!st&&S.showEst){ st=estStart(it,list); est=!!st; }
        if(st&&!est){ const sx=X(st), w=Math.max(ex-sx,W);
          tr+=`<div class="gbar ${done?'done':''} ${late?'late':''}" data-open="${esc(it.id)}" style="left:${sx}px;width:${w}px" title="${esc(title)}">${w>70?esc(title):''}</div><span class="glab" style="left:${ex+8}px;color:${u.color}">${esc(daysTxt(it))}</span>`;
        } else {
          if(est){ const sx=X(st); tr+=`<div class="gest" style="left:${sx}px;width:${Math.max(ex-sx-W/2,4)}px"></div>`; }
          const cx=ex-W/2;
          tr+=`<div class="gms ${done?'done':''} ${late?'late':''}" data-open="${esc(it.id)}" style="left:${cx-9}px" title="${esc(title)} — ${esc(fmt(it.date))}"></div><span class="glab" style="left:${cx+16}px;color:${u.color}">${esc(fmt(it.date,DM))} · ${esc(daysTxt(it))}</span>`;
        }
      } else tr+=`<span class="gundef" style="left:${Math.max(dDiff(rs,t0)*W+10,8)}px">${esc(t('gl_tbd'))}</span>`;
      rows+=`<div class="grow ${done?'done':''}" style="--cc:${c.hex}"><div class="gl">${chkBtn(it)}<span class="nm" data-open="${esc(it.id)}" title="${esc(title)}">${esc(title)}</span><span class="dt">${it.date?esc(fmt(it.date,DM)):'—'}</span></div><div class="gt" style="width:${TW}px">${tr}</div></div>`;
    });
  });
  const tools=`<div class="toolbar" style="margin-bottom:12px"><div class="seg">${['day','week','month'].map(k=>`<button class="${S.zoom===k?'on':''}" data-a="zoom" data-v="${k}">${esc(t('gz_'+k))}</button>`).join('')}</div>
    <button class="btn sm" data-a="gtoday">${esc(t('g_today'))}</button><span style="flex:1"></span>
    <button class="chip ${S.showEst?'on':''}" data-a="gest">${esc(t('g_work'))}</button>${showHeaders?'':`<button class="chip ${S.hideDone?'on':''}" data-a="hidedone">${esc(t('hide_done'))}</button>`}</div>`;
  return `${tools}<div class="gwrap"><div class="gscroll" data-x0="${dDiff(rs,t0)*W}" data-gkey="${esc(S.view)}"><div class="ginner" style="width:calc(var(--lw) + ${TW}px)">
    <div class="ghead"><div class="gl" style="width:var(--lw);flex:none">${esc(t('g_steps'))}</div><div class="gcols" style="width:${TW}px"><div class="gmonths">${months}</div>${S.zoom==='month'?'':`<div class="gunits">${units}</div>`}</div></div>
    <div class="gbody"><div class="grid-ov" style="left:var(--lw);width:${TW}px">${ov}</div>${rows}</div></div></div>
  <div class="glegend"><span><i style="width:22px;height:10px;border-radius:3px;background:#9ca3af;display:inline-block"></i>${esc(t('gl_period'))}</span><span><i style="width:10px;height:10px;transform:rotate(45deg);background:#9ca3af;display:inline-block;border-radius:2px"></i>${esc(t('gl_deadline'))}</span><span><i style="width:22px;height:9px;border:1.5px dashed #9ca3af;border-radius:3px;display:inline-block"></i>${esc(t('gl_work'))}</span><span><i style="width:10px;height:10px;border-radius:2px;background:var(--green);display:inline-block"></i>${esc(t('gl_done'))}</span><span><i style="width:2px;height:12px;background:var(--blue);display:inline-block"></i>${esc(t('gl_today'))}</span></div></div>`;
}
function scrollGanttToday(gs,smooth){ const lw=parseFloat(getComputedStyle(gs).getPropertyValue('--lw'))||300; gs.scrollTo({left:Math.max(0,+gs.dataset.x0-(gs.clientWidth-lw)*0.2),behavior:smooth?'smooth':'auto'}); }
function afterRender(el){
  const gs=el.querySelector('.gscroll'); if(!gs) return;
  const key=gs.dataset.gkey+':'+S.zoom;
  if(S.gScroll[key]!=null){ gs.scrollLeft=S.gScroll[key].l; gs.scrollTop=S.gScroll[key].t; } else scrollGanttToday(gs,false);
  gs.addEventListener('scroll',()=>{ S.gScroll[key]={l:gs.scrollLeft,t:gs.scrollTop}; },{passive:true});
}

/* ---------------- Drawer : fiche (lecture) + modification ---------------- */
function openDrawer(id,edit){ S.openId=id; S.dEdit=!!edit; ackSeen(id); renderDrawer(); document.getElementById('drawer').classList.add('on'); document.getElementById('scrim').classList.add('on'); document.getElementById('drawer').scrollTop=0; }
function closeDrawer(){ S.openId=null; S.dEdit=false; document.getElementById('drawer').classList.remove('on'); document.getElementById('scrim').classList.remove('on'); render(); }
function renderDrawer(){
  const it=S.items.get(S.openId); if(!it) return;
  const c=CAT[it.category], u=urgency(it);
  const head=`<div class="dh"><span class="tag" style="background:${c.hex}1a;color:${c.hex}">${esc(cname(c.key))}</span><span class="pill ${u.cls}"><i></i>${esc(u.label)}</span><span class="days" style="color:${u.color};min-width:0">${esc(daysTxt(it))}</span><span class="sp"></span><span class="saved" id="savedLbl"></span><button class="btn ghost sm" data-a="close" aria-label="${esc(t('close'))}">✕</button></div>`;
  document.getElementById('drawer').innerHTML=head+`<div class="db">${S.dEdit?drawerEdit(it):drawerRead(it)}</div>`;
}
function drawerRead(it){
  const isDone=it.status==='done', dn=L(it,'dateNote'), desc=L(it,'description'), ev=L(it,'evaluation'), s=chInfo(it.id), g=groupForItem(it);
  const warn=it.dateConfidence==='provisoire'||/⚠/.test(dn||'');
  const dateLine=it.date?(it.startDate?t('f_period',{a:fmt(it.startDate,FULL),b:fmt(it.date,FULL)}):fmt(it.date,FULL)):t('tbd');
  let h=`<div style="display:flex;gap:6px;flex-wrap:wrap">${it._custom?`<span class="tag" style="background:#f3e8ff;color:#7c3aed">${esc(t('mine_tag'))}</span>`:''}${s?`<span class="nbadge ${s.ch==='mod'?'mod':''}">${esc(t(s.ch==='mod'?'upd_mod':'upd_new'))}</span>`:''}${it._mod?`<span class="flag">${esc(t('mod_tag'))}</span>`:''}</div>
  <div class="dtitle">${esc(L(it,'title'))}</div>
  ${s&&s.ch==='mod'?`<div class="hint" style="margin-top:-4px">${esc(changeText(it,s))}</div>`:''}
  <div class="facts">
    <span>📅</span><div class="v"><span class="cap">${esc(dateLine)}</span>${it.dateConfidence==='provisoire'?` <span class="flag" style="text-transform:none">${esc(t('provisional'))}</span>`:''}</div>
    ${timeTxt(it)?`<span>🕘</span><div class="v">${esc(timeTxt(it))}</div>`:''}
    ${it.room?`<span>📍</span><div class="v">${esc(it.room)}</div>`:''}
    ${L(it,'examFormat')?`<span>📝</span><div class="v">${esc(L(it,'examFormat'))}</div>`:''}
  </div>
  ${dn?`<div class="box ${warn?'warn':'info'}">${esc(dn)}</div>`:''}
  ${desc?`<div style="font-size:14px;line-height:1.55;color:#374151">${esc(desc)}</div>`:''}
  ${ev?`<div class="box info"><b>${esc(t('notation'))} :</b> ${esc(ev)}</div>`:''}
  ${g?(g.group?`<div class="box grp">${t('grp_your',{g:esc(g.group.name)})}<div style="margin-top:4px">${(g.group.members||[]).map(esc).join(' · ')}</div></div>`:`<div class="box grp" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span style="flex:1">${esc(t('grp_choose'))}</span><button class="btn sm" data-a="gotogrp" data-cat="${esc(g.set.category)}" data-g="${esc(g.set.id)}">${esc(t('grp_choose_btn'))}</button></div>`):''}
  <div class="dact"><button class="btn ${isDone?'vbtn on':'pri'}" data-a="valid" data-id="${esc(it.id)}">${esc(t(isExam(it)?(isDone?'passed':'mark_passed'):(isDone?'validated':'validate')))}</button>${it.date?`<button class="btn" data-a="agone">${esc(t('agenda'))}</button>`:''}<button class="btn" data-a="dedit">${esc(t('edit'))}</button></div>
  ${isDone&&it.completedAt?`<div class="hint" style="color:var(--green)">${esc(t('validated_on',{d:fmt(it.completedAt,SHORT)}))}</div>`:''}`;
  if(it.checklist.length) h+=`<div class="dsec">${esc(t(isExam(it)?'deliverables_exam':'deliverables'))}</div>${it.checklist.map((x,i)=>`<label class="ck ${x.d?'done':''}" style="cursor:pointer"><input type="checkbox" data-ck="${i}" ${x.d?'checked':''}><span style="flex:1;font-size:13.5px;${x.d?'text-decoration:line-through;color:var(--muted)':''}">${esc(Lck(it,i))}</span></label>`).join('')}`;
  if(it.links.length) h+=`<div class="dsec">${esc(t('documents'))}</div>${it.links.map((l,i)=>`<a class="doclink" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${i===0&&/folders/.test(l.url)?'📁':'📄'}<span>${esc(l.label||l.url)}</span>↗</a>`).join('')}`;
  h+=`<div class="dsec">${esc(t('my_notes'))}</div><textarea class="inp" data-f="comments" rows="3" style="width:100%" placeholder="${esc(t('my_notes_ph'))}">${esc(it.comments)}</textarea>`;
  h+=`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px">${it._mod?`<button class="btn ghost sm" data-a="reset">${esc(t('reset'))}</button>`:''}<span style="flex:1"></span><button class="btn ghost sm danger" data-a="del">${esc(t(it._custom?'delete':'remove'))}</button></div>`;
  if(it.source) h+=`<div class="dsrc">${esc(t('source'))} : ${esc(it.source)}</div>`;
  return h;
}
function drawerEdit(it){
  const opt=(o,v)=>Object.entries(o).map(([k,l])=>`<option value="${k}" ${v===k?'selected':''}>${esc(l)}</option>`).join('');
  return `<button class="btn ghost sm" data-a="dread" style="margin:-6px 0 8px -8px">${esc(t('back'))}</button>
    <div class="hint" style="margin:0 0 10px">${esc(t('e_your_change'))}</div>
    <div class="f"><label>${esc(t('e_title'))}</label><input class="inp" data-f="title" value="${esc(it.title)}"></div>
    <div class="f2"><div class="f"><label>${esc(t(isExam(it)?'e_date_exam':'e_date'))}</label><input class="inp" type="date" data-f="date" value="${esc(it.date||'')}"><div class="hint">${esc(t('e_empty_date'))}</div></div>
      <div class="f"><label>${esc(t('e_status'))}</label><select class="inp" data-f="status">${opt(Object.fromEntries(STATUS_KEYS.map(k=>[k,t('st_'+k)])),it.status)}</select></div></div>
    <div class="f"><label>${esc(t('e_desc'))}</label><textarea class="inp" data-f="description" rows="3">${esc(it.description)}</textarea></div>
    <div class="f"><label>${esc(t('e_checklist'))}</label><div>${it.checklist.map((x,i)=>`<div class="ck ${x.d?'done':''}"><input type="checkbox" data-ck="${i}" ${x.d?'checked':''}><input class="inp" data-ckt="${i}" value="${esc(x.t)}"><button class="btn ghost sm" data-a="ckdel" data-i="${i}" aria-label="✕">✕</button></div>`).join('')}</div><button class="btn sm" data-a="ckadd" style="margin-top:6px">${esc(t('e_add_ck'))}</button></div>
    <div class="f"><label>${esc(t('e_links'))}</label>${it.links.map((l,i)=>`<div class="lk"><input class="inp" data-lkl="${i}" value="${esc(l.label)}" placeholder="${esc(t('e_label'))}" style="max-width:150px"><input class="inp" data-lku="${i}" value="${esc(l.url)}" placeholder="https://…"><button class="btn ghost sm" data-a="lkdel" data-i="${i}" aria-label="✕">✕</button></div>`).join('')}<button class="btn sm" data-a="lkadd">${esc(t('e_add_link'))}</button></div>
    <details class="more"><summary>${esc(t('e_more'))}</summary>
      <div class="f2"><div class="f"><label>${esc(t('e_start'))}</label><input class="inp" type="date" data-f="startDate" value="${esc(it.startDate||'')}"></div><div class="f"><label>${esc(t('e_conf'))}</label><select class="inp" data-f="dateConfidence">${opt({confirmee:t('conf_ok'),provisoire:t('conf_prov')},it.dateConfidence)}</select></div></div>
      <div class="f2"><div class="f"><label>${esc(t('e_cat'))}</label><select class="inp" data-f="category">${opt(Object.fromEntries(CATEGORIES.map(c=>[c.key,cname(c.key)])),it.category)}</select></div><div class="f"><label>${esc(t('e_format'))}</label><input class="inp" data-f="examFormat" value="${esc(it.examFormat)}"></div></div>
      <div class="f"><label>${esc(t('e_note'))}</label><input class="inp" data-f="dateNote" value="${esc(it.dateNote)}"></div>
      <div class="f"><label>${esc(t('e_eval'))}</label><textarea class="inp" data-f="evaluation" rows="2">${esc(it.evaluation)}</textarea></div>
    </details>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">${it._mod?`<button class="btn ghost sm" data-a="reset">${esc(t('reset'))}</button>`:''}<span style="flex:1"></span><button class="btn ghost sm danger" data-a="del">${esc(t(it._custom?'delete':'remove'))}</button></div>`;
}
function curOpen(){ return S.items.get(S.openId); }
function patchOpen(fn,rerender){ const it=curOpen(); if(!it) return; const copy=normalize(stripMeta(JSON.parse(JSON.stringify(it)))); fn(copy); saveItem(copy); if(rerender) renderDrawer(); render(); }

/* ---------------- Agenda (.ics / Google) ---------------- */
const pad=n=>String(n).padStart(2,'0');
const ymd=s=>s.replace(/-/g,'');
function icsEsc(s){ return String(s||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n'); }
function fold(line){ const out=[]; let s=line; while(s.length>73){ out.push(s.slice(0,73)); s=' '+s.slice(73); } out.push(s); return out.join('\r\n'); }
function evDetails(it){ const parts=[]; const d=L(it,'description'), dn=L(it,'dateNote'), ev=L(it,'evaluation');
  if(d) parts.push(d); if(dn) parts.push(t('ics_note')+' : '+dn); if(ev) parts.push(t('notation')+' : '+ev); if(it.room) parts.push(t('ics_room')+' : '+it.room);
  if(it.links.length) parts.push(t('ics_links')+' :\n'+it.links.slice(0,8).map(l=>'- '+(l.label||'')+' '+l.url).join('\n')); parts.push('⚠ '+t('warn_s').replace(/<[^>]+>/g,'')); return parts.join('\n\n'); }
function icsEvent(it){
  const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+/,'');
  const L1=['BEGIN:VEVENT','UID:'+it.id+'@mtlci-retroplanning','DTSTAMP:'+stamp,'SUMMARY:'+icsEsc(t('ics_prefix')+' '+L(it,'title'))];
  if(it.timeStart){ const te=it.timeEnd||(pad(Math.min(23,+it.timeStart.slice(0,2)+1))+it.timeStart.slice(2));
    L1.push('DTSTART;TZID=Europe/Paris:'+ymd(it.date)+'T'+it.timeStart.replace(':','')+'00','DTEND;TZID=Europe/Paris:'+ymd(it.date)+'T'+te.replace(':','')+'00'); }
  else { L1.push('DTSTART;VALUE=DATE:'+ymd(it.startDate||it.date),'DTEND;VALUE=DATE:'+ymd(iso(addDays(parseD(it.date),1)))); }
  if(it.room) L1.push('LOCATION:'+icsEsc(it.room));
  L1.push('DESCRIPTION:'+icsEsc(evDetails(it)));
  ['-P7D','-P1D'].forEach(tr=>L1.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+icsEsc(L(it,'title')),'TRIGGER:'+tr,'END:VALARM'));
  L1.push('END:VEVENT'); return L1;
}
function buildIcs(items){
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MTLCI//Retroplanning//FR','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:MTLCI 2026-27',
    'BEGIN:VTIMEZONE','TZID:Europe/Paris','BEGIN:DAYLIGHT','TZOFFSETFROM:+0100','TZOFFSETTO:+0200','TZNAME:CEST','DTSTART:19700329T020000','RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU','END:DAYLIGHT','BEGIN:STANDARD','TZOFFSETFROM:+0200','TZOFFSETTO:+0100','TZNAME:CET','DTSTART:19701025T030000','RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU','END:STANDARD','END:VTIMEZONE'];
  items.forEach(it=>lines.push(...icsEvent(it))); lines.push('END:VCALENDAR');
  return lines.map(fold).join('\r\n');
}
function googleUrl(it){
  let dates;
  if(it.timeStart){ const te=it.timeEnd||(pad(Math.min(23,+it.timeStart.slice(0,2)+1))+it.timeStart.slice(2)); dates=ymd(it.date)+'T'+it.timeStart.replace(':','')+'00/'+ymd(it.date)+'T'+te.replace(':','')+'00'; }
  else dates=ymd(it.startDate||it.date)+'/'+ymd(iso(addDays(parseD(it.date),1)));
  const p=new URLSearchParams({action:'TEMPLATE',text:t('ics_prefix')+' '+L(it,'title'),dates,details:evDetails(it).slice(0,1500),ctz:'Europe/Paris'});
  if(it.room) p.set('location',it.room);
  return 'https://calendar.google.com/calendar/render?'+p.toString();
}
function outlookUrl(it,work){
  let st,en,allday='false';
  if(it.timeStart){ const te=it.timeEnd||(pad(Math.min(23,+it.timeStart.slice(0,2)+1))+it.timeStart.slice(2)); st=it.date+'T'+it.timeStart+':00'; en=it.date+'T'+te+':00'; }
  else { st=it.startDate||it.date; en=iso(addDays(parseD(it.date),1)); allday='true'; }
  const p=new URLSearchParams({path:'/calendar/action/compose',rru:'addevent',subject:t('ics_prefix')+' '+L(it,'title'),startdt:st,enddt:en,allday,body:evDetails(it).slice(0,1500)});
  if(it.room) p.set('location',it.room);
  return (work?'https://outlook.office.com':'https://outlook.live.com')+'/calendar/0/deeplink/compose?'+p.toString();
}
const ICS_OK=()=>!downloads; // claude.ai n'autorise pas le téléchargement de fichiers .ics
/* Abonnement : fichier calendrier publié avec le site (généré par tools/build_calendar.py) */
const SITE_URL='https://benjaminrossi13.github.io/retroplanning-mtlci/'; // ex. 'https://benjaminrossi13.github.io/retroplanning-mtlci/' (sert à la version claude.ai)
const CAL_FILE='calendar/mtlci-2026-27.ics';
function calUrl(){ try{ if(!downloads&&/^https?:/.test(location.protocol)) return new URL(CAL_FILE,location.href).href; if(SITE_URL) return new URL(CAL_FILE,SITE_URL).href; }catch(e){} return ''; }
function subscribeDialog(){
  const u=calUrl(); if(!u) return;
  const web=u.replace(/^https?:/,'webcal:'), name='MTLCI 2026-27';
  const g='https://calendar.google.com/calendar/r?cid='+encodeURIComponent(web);
  const o365='https://outlook.office.com/calendar/0/addfromweb?url='+encodeURIComponent(u)+'&name='+encodeURIComponent(name);
  const olive='https://outlook.live.com/calendar/0/addfromweb?url='+encodeURIComponent(u)+'&name='+encodeURIComponent(name);
  modal(`<h3>${esc(t('sub_t'))}</h3><p>${esc(t('sub_p'))}</p>
    <a class="agopt" href="${esc(g)}" target="_blank" rel="noopener"><span class="ai">🗓️</span><span><b>Google Agenda</b><small>${esc(t('sub_google'))}</small></span></a>
    <a class="agopt" href="${esc(web)}"><span class="ai">🍎</span><span><b>iPhone / Mac (Apple Calendar)</b><small>${esc(t('sub_apple'))}</small></span></a>
    <a class="agopt" href="${esc(o365)}" target="_blank" rel="noopener"><span class="ai">🏫</span><span><b>${esc(t('ag_o365'))}</b><small>${esc(t('ag_o365_s'))}</small></span></a>
    <a class="agopt" href="${esc(olive)}" target="_blank" rel="noopener"><span class="ai">📧</span><span><b>${esc(t('ag_outlook'))}</b><small>${esc(t('ag_outlook_s'))}</small></span></a>
    <div class="f" style="margin-top:12px"><label>${esc(t('sub_link'))}</label><div class="lk"><input class="inp" id="subUrl" readonly value="${esc(u)}"><button class="btn sm" data-a="subcopy">${esc(t('sub_copy'))}</button></div></div>
    <div class="hint">${esc(t('sub_note'))}</div>
    <div class="acts"><button class="btn" data-a="mclose">${esc(t('close'))}</button></div>`);
}
async function saveFile(name,text){
  if(downloads){ try{ await downloads.save({filename:name,data:text}); toast(t('ag_dl')); }catch(e){ toast(e&&e.code==='rejected_extension'?t('ag_noics'):t('ag_cancel')); } return; }
  try{ const url=URL.createObjectURL(new Blob([text],{type:'text/calendar;charset=utf-8'})); const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2000); toast(t('ag_dl')); }catch(e){ toast(t('ag_cancel')); }
}
function agendaOne(){
  const it=curOpen(); if(!it||!it.date) return;
  modal(`<h3>${esc(t('ag_t'))}</h3><p style="margin-bottom:12px">${esc(L(it,'title'))}</p>
    <a class="agopt" href="${esc(googleUrl(it))}" target="_blank" rel="noopener"><span class="ai">🗓️</span><span><b>${esc(t('ag_google'))}</b><small>${esc(t('ag_google_s'))}</small></span></a>
    <a class="agopt" href="${esc(outlookUrl(it,true))}" target="_blank" rel="noopener"><span class="ai">🏫</span><span><b>${esc(t('ag_o365'))}</b><small>${esc(t('ag_o365_s'))}</small></span></a>
    <a class="agopt" href="${esc(outlookUrl(it,false))}" target="_blank" rel="noopener"><span class="ai">📧</span><span><b>${esc(t('ag_outlook'))}</b><small>${esc(t('ag_outlook_s'))}</small></span></a>
    ${ICS_OK()?`<button class="agopt" data-a="icsone"><span class="ai">📥</span><span><b>${esc(t('ag_ics'))}</b><small>${esc(t('ag_ics_s'))}</small></span></button>`:`<div class="hint">${esc(t('ag_noics_hint'))}</div>`}
    <div class="acts"><button class="btn" data-a="mclose">${esc(t('close'))}</button></div>`);
}
function agendaAll(){
  modal(`<h3>${esc(t('ag_all_t'))}</h3><p>${esc(t('ag_all_p'))}</p>
    <div class="agcats">${CATEGORIES.map(c=>`<label><input type="checkbox" class="agc" value="${c.key}" checked> <span class="dot" style="display:inline-block;width:9px;height:9px;border-radius:3px;background:${c.color}"></span>${esc(cname(c.key))}</label>`).join('')}</div>
    <div class="acts"><button class="btn" data-a="mclose">${esc(t('cancel'))}</button><button class="btn pri" data-a="icsall" id="icsallBtn"></button></div>`);
  updAgAll();
}
function agAllItems(){ const ks=[...document.querySelectorAll('.agc:checked')].map(x=>x.value); const t0=iso(today0()); return allItems().filter(i=>ks.includes(i.category)&&i.date&&i.date>=t0&&i.status!=='done'); }
function updAgAll(){ const b=document.getElementById('icsallBtn'); if(b){ const n=agAllItems().length; b.textContent=t('ag_all_btn',{n}); b.disabled=!n; } }

/* ---------------- Recherche ---------------- */
function norm(s){ return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
function runSearch(){
  const box=document.getElementById('qres'), q=norm(S.q.trim());
  if(!q){ box.hidden=true; box.innerHTML=''; return; }
  const words=q.split(/\s+/).filter(Boolean);
  const hay=it=>norm([it.title,it.en&&it.en.title,it.description,it.en&&it.en.description,it.room,it.dateNote,it.evaluation,it.examFormat,cname(it.category),it.checklist.map(c=>c.t).join(' '),it.links.map(l=>l.label).join(' ')].join(' '));
  const its=allItems().filter(it=>{ const h=hay(it); return words.every(w=>h.includes(w)); }).slice(0,12);
  const grs=[]; S.groups.forEach(g=>(g.groups||[]).forEach(gr=>{ const h=norm(gr.name+' '+(gr.members||[]).join(' ')); if(words.every(w=>h.includes(w))) grs.push({g,gr}); }));
  let h='';
  if(its.length) h+=`<div class="qh">${esc(t('search_items'))}</div>`+its.map(it=>{ const c=CAT[it.category]; return `<div class="qi" data-open="${esc(it.id)}" data-qclose="1"><span class="cbar" style="background:${c.color};height:28px"></span><div style="min-width:0"><div class="qt">${esc(L(it,'title'))}</div><div class="qm">${esc(cshort(it.category))} · ${esc(fmt(it.date,SHORT))}${timeTxt(it)?' · '+esc(timeTxt(it)):''}${it.room?' · 📍 '+esc(it.room):''}</div></div></div>`; }).join('');
  if(grs.length) h+=`<div class="qh">${esc(t('search_groups'))}</div>`+grs.slice(0,6).map(({g,gr})=>`<div class="qi" data-a="gotogrp" data-cat="${esc(g.category)}" data-g="${esc(g.id)}" data-q="${esc(S.q.trim())}"><span>👥</span><div><div class="qt">${esc(gr.name)} · ${esc(GL(g,'tab')||'')}</div><div class="qm">${(gr.members||[]).map(esc).join(', ')}</div></div></div>`).join('');
  if(!h) h=`<div class="qe">${esc(t('search_none',{q:S.q.trim()}))}</div>`;
  box.innerHTML=h; box.hidden=false;
}
function closeSearch(){ const box=document.getElementById('qres'); box.hidden=true; }

/* ---------------- Modals ---------------- */
function modal(html){ document.getElementById('mbox').innerHTML=html; document.getElementById('modal').classList.add('on'); }
function closeModal(){ document.getElementById('modal').classList.remove('on'); }

/* ---------------- Nouvelle échéance (personnelle) ---------------- */
function newItem(cat){
  const it=normalize({id:uid(),category:cat||(S.view.startsWith('cat-')?S.view.slice(4):'memoire'),title:t('new_title'),status:'todo',official:false,order:Date.now()});
  S.ov.custom[it.id]=it; saveItem(it); render(); openDrawer(it.id,true);
  setTimeout(()=>{ const i=document.querySelector('#drawer [data-f=title]'); if(i){ i.focus(); i.select(); } },220);
}

/* ---------------- Events ---------------- */
document.addEventListener('click',async e=>{
  if(!e.target.closest('.search')) closeSearch();
  const op=e.target.closest('[data-open]'), a=e.target.closest('[data-a]');
  if(a){
    const act=a.dataset.a;
    if(act==='valid'){ toggleDone(a.dataset.id); return; }
    if(act==='ctab'){ S.catTab[a.dataset.k]=a.dataset.v; lsSet('rp-cattab',S.catTab); render(); return; }
    if(act==='zoom'){ S.zoom=a.dataset.v; render(); return; }
    if(act==='gtoday'){ const gs=document.querySelector('.gscroll'); if(gs) scrollGanttToday(gs,true); return; }
    if(act==='gest'){ S.showEst=!S.showEst; render(); return; }
    if(act==='gcol'){ const k=a.dataset.k; S.collapsed.has(k)?S.collapsed.delete(k):S.collapsed.add(k); render(); return; }
    if(act==='burger'){ document.getElementById('side').classList.toggle('on'); return; }
    if(act==='close'){ closeDrawer(); return; }
    if(act==='new'){ newItem(); return; }
    if(act==='newin'){ newItem(a.dataset.k); return; }
    if(act==='filt'){ const k=a.dataset.k; if(S.filters.has(k)&&S.filters.size===CATEGORIES.length) S.filters=new Set([k]); else if(S.filters.has(k)){ S.filters.delete(k); if(!S.filters.size) S.filters=new Set(CATEGORIES.map(c=>c.key)); } else S.filters.add(k); render(); return; }
    if(act==='hidedone'){ S.hideDone=!S.hideDone; render(); return; }
    if(act==='jump'){ const el=document.getElementById('m-'+a.dataset.k); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); return; }
    if(act==='togalt'){ S.showAlt=!S.showAlt; lsSet('rp-showalt',S.showAlt); render(); return; }
    if(act==='calprev'||act==='calnext'){ const m=S.calMonth; S.calMonth=new Date(m.getFullYear(),m.getMonth()+(act==='calnext'?1:-1),1); render(); return; }
    if(act==='caltoday'){ S.calMonth=null; render(); return; }
    if(act==='calgo'){ const [y,m]=a.dataset.k.split('-').map(Number); S.calMonth=new Date(y,m-1,1); render(); return; }
    if(act==='mclose'){ closeModal(); return; }
    if(act==='dedit'){ S.dEdit=true; renderDrawer(); document.getElementById('drawer').scrollTop=0; return; }
    if(act==='dread'){ S.dEdit=false; renderDrawer(); return; }
    if(act==='agone'){ agendaOne(); return; }
    if(act==='icsone'){ const it=curOpen(); if(it) await saveFile('mtlci-'+it.id+'.ics',buildIcs([it])); closeModal(); return; }
    if(act==='subscribe'){ document.getElementById('side').classList.remove('on'); subscribeDialog(); return; }
    if(act==='subcopy'){ const i=document.getElementById('subUrl'); try{ await navigator.clipboard.writeText(i.value); toast(t('sub_copied')); }catch(err){ i.select(); toast(t('sub_select')); } return; }
    if(act==='agall'){ document.getElementById('side').classList.remove('on'); agendaAll(); return; }
    if(act==='icsall'){ const its=agAllItems(); if(its.length) await saveFile('mtlci-2026-27.ics',buildIcs(its)); closeModal(); return; }
    if(act==='lang'){ LANG=a.dataset.v; try{ localStorage.setItem('rp-lang',LANG); }catch(err){} render(); if(S.openId) renderDrawer(); runSearch(); return; }
    if(act==='mygrp'){ const gid=a.dataset.g, n=a.dataset.n; if(S.myGroup[gid]===n){ delete S.myGroup[gid]; toast(t('grp_cleared')); } else { S.myGroup[gid]=n; toast(t('grp_saved',{g:n})); } lsSet(GRP_KEY,S.myGroup); render(); return; }
    if(act==='gotogrp'){ closeSearch(); if(S.openId) closeDrawer(); S.catTab[a.dataset.cat]='grp-'+a.dataset.g; S.gq=a.dataset.q||''; lsSet('rp-cattab',S.catTab); if(location.hash==='#cat-'+a.dataset.cat) render(); else location.hash='cat-'+a.dataset.cat; return; }
    if(act==='ckadd'){ patchOpen(it=>it.checklist.push({t:'',d:false}),true); const ins=document.querySelectorAll('[data-ckt]'); if(ins.length) ins[ins.length-1].focus(); return; }
    if(act==='ckdel'){ const i=+a.dataset.i; patchOpen(it=>it.checklist.splice(i,1),true); return; }
    if(act==='lkadd'){ patchOpen(it=>it.links.push({label:'',url:''}),true); const ins=document.querySelectorAll('[data-lkl]'); if(ins.length) ins[ins.length-1].focus(); return; }
    if(act==='lkdel'){ const i=+a.dataset.i; patchOpen(it=>it.links.splice(i,1),true); return; }
    if(act==='del'){ const it=curOpen(), hide=!it._custom; modal(`<h3>${esc(t(hide?'remove_q':'delete_q',{t:L(it,'title')}))}</h3><p>${esc(t(hide?'remove_p':'delete_p'))}</p><div class="acts"><button class="btn" data-a="mclose">${esc(t('cancel'))}</button><button class="btn pri" style="background:var(--red);border-color:var(--red)" data-a="delok">${esc(t(hide?'remove':'delete'))}</button></div>`); return; }
    if(act==='delok'){ const id=S.openId; closeModal(); deleteItem(id); closeDrawer(); toast(t('done_toast')); return; }
    if(act==='reset'){ resetItem(S.openId); renderDrawer(); render(); toast(t('reset_done')); return; }
    if(act==='unhide'){ S.ov.hidden=[]; recompute(); saveOverlay(); render(); toast(t('unhidden')); return; }
    if(act==='welcome'){ lsSet('rp-welcome-v2',true); render(); return; }
  }
  if(op&&!e.target.closest('input,select,textarea,a[href]')){ if(op.dataset.qclose){ closeSearch(); } openDrawer(op.dataset.open); }
});
document.addEventListener('change',e=>{
  if(e.target.classList.contains('agc')){ updAgAll(); return; }
  const dr=e.target.closest('#drawer'); if(!dr) return;
  const f=e.target.dataset.f;
  if(f&&f!=='comments'){
    let v=e.target.value; if(f==='date'||f==='startDate') v=v||null;
    if(f==='status'){ patchOpen(it=>{ it.status=v; it.completedAt=v==='done'?(it.completedAt||iso(today0())):null; },true); return; }
    if(['date','category','dateConfidence','startDate','timeStart','timeEnd'].includes(f)){ patchOpen(it=>{ it[f]=v; },true); return; }
    return;
  }
  if(e.target.dataset.ck!==undefined){ const i=+e.target.dataset.ck; patchOpen(it=>{ if(it.checklist[i]) it.checklist[i].d=e.target.checked; },true); }
});
let typeT;
document.addEventListener('input',e=>{
  if(e.target.id==='q'){ S.q=e.target.value; runSearch(); return; }
  if(e.target.id==='gsearch'){ S.gq=e.target.value; const pos=e.target.selectionStart; render(); const n=document.getElementById('gsearch'); if(n){ n.focus(); try{ n.setSelectionRange(pos,pos); }catch(err){} } return; }
  const dr=e.target.closest('#drawer'); if(!dr) return;
  const el=e.target; if(['date','checkbox','time'].includes(el.type)||el.tagName==='SELECT') return;
  clearTimeout(typeT);
  typeT=setTimeout(()=>{
    const f=el.dataset.f;
    if(f){ patchOpen(it=>{ it[f]=el.value; }); return; }
    if(el.dataset.ckt!==undefined){ const i=+el.dataset.ckt; patchOpen(it=>{ if(it.checklist[i]) it.checklist[i].t=el.value; }); return; }
    if(el.dataset.lkl!==undefined){ const i=+el.dataset.lkl; patchOpen(it=>{ if(it.links[i]) it.links[i].label=el.value; }); return; }
    if(el.dataset.lku!==undefined){ const i=+el.dataset.lku; patchOpen(it=>{ if(it.links[i]) it.links[i].url=el.value.trim(); }); return; }
  },500);
});
document.getElementById('q').addEventListener('focus',()=>{ if(S.q.trim()) runSearch(); });
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){ if(!document.getElementById('qres').hidden){ closeSearch(); return; } if(document.getElementById('modal').classList.contains('on')) closeModal(); else if(S.openId) closeDrawer(); }
  if(e.key==='Enter'&&e.target.id==='q'){ const f=document.querySelector('#qres .qi'); if(f) f.click(); }
  if(e.key==='/'&&!e.target.closest('input,textarea')){ e.preventDefault(); document.getElementById('q').focus(); }
});
document.getElementById('modal').addEventListener('click',e=>{ if(e.target.id==='modal') closeModal(); });
window.addEventListener('hashchange',route);

S.catTab=lsGet('rp-cattab',{})||{}; S.showAlt=lsGet('rp-showalt',true)!==false;
route();
initData();
