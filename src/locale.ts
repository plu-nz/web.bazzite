import { readSharedPreference, writeSharedPreference, type SharedPreference } from './locale-preference';

export type Locale = 'en' | 'pt' | 'es';
export type Preference = SharedPreference;
const key = 'plunz_bazzite_locale';
export const readPreference = () => readSharedPreference(window.localStorage, key);
export const savePreference = (value: Preference) => writeSharedPreference(window.localStorage, key, value);
export const detectLocale = (): Locale => {
  for (const language of navigator.languages ?? [navigator.language]) {
    const base = language.toLowerCase().split('-')[0];
    if (base === 'en' || base === 'pt' || base === 'es') return base;
  }
  return 'en';
};

export const copy = {
  en: {
    skip: 'Skip to content', home: 'Home', privacy: 'Privacy', navigation: 'Main navigation', language: 'Language', system: 'System language',
    eyebrow: 'Personal server · Bazzite', title: 'Useful services. Private access.', intro: 'Keeper.sh and SongMirror run on a personal Bazzite server. This public site explains what they do and how Google data is used.',
    privateTitle: 'Interfaces stay on the tailnet', privateText: 'The service interfaces are private and available only to devices on the owner’s tailnet. This public site is informational and contains no administration links.',
    services: 'The services', keeper: 'Calendar synchronization', keeperText: 'Keeper.sh connects Google Calendar accounts to synchronize events between selected calendars.', song: 'Playlist synchronization', songText: 'SongMirror connects YouTube Music through Google’s device authorization flow to synchronize selected playlists.',
    privacyLead: 'How these two services use Google data', privacyIntro: 'This policy covers the personal Keeper.sh and SongMirror instances on the Bazzite server. It does not describe other PLUNZ products or the upstream hosted services.',
    keeperData: 'Keeper.sh · Google Calendar', keeperScope: 'Google permissions: calendar.events, calendar.calendarlist.readonly, and userinfo.email.', keeperPurpose: 'The service reads the calendar list to choose calendars, uses the account email to identify the connection, and reads and writes calendar events to synchronize selected calendars. Event information and linked account records are held in its local PostgreSQL data.',
    songData: 'SongMirror · YouTube Music', songScope: 'Google permission: https://www.googleapis.com/auth/youtube, granted through the device code flow.', songPurpose: 'The service accesses the YouTube Music account to synchronize selected playlists. Account information, tokens, matching cache, history, and playlist backups are stored in its local data directory.',
    storageTitle: 'Storage and retention', storageText: 'OAuth tokens and service data are stored on the personal Bazzite server, in Keeper.sh’s persistent database and SongMirror’s persistent data directory. Data is kept while the services are in use. To request deletion of an account’s stored data and tokens, contact the address below. No automatic deletion period is promised.',
    sharingTitle: 'Sharing and security', sharingText: 'The services send the data needed for their functions to Google APIs. Their interfaces are restricted to the owner’s tailnet; containers listen on the server’s loopback interface. The public site has no sign-in or administration interface. Service data is not published here.',
    revokeTitle: 'Revoke access', revokeText: 'You can revoke either service’s Google access in your Google Account permissions. Revocation prevents future authorized API access; contact us to request deletion of data and tokens already stored on the server.',
    contactTitle: 'Contact', contactText: 'For privacy questions and deletion requests:', updated: 'Last updated: 10 November 2026',
    footer: 'A personal Bazzite server project by PLUNZ.'
  },
  pt: {
    skip: 'Pular para o conteúdo', home: 'Início', privacy: 'Privacidade', navigation: 'Navegação principal', language: 'Idioma', system: 'Idioma do sistema',
    eyebrow: 'Servidor pessoal · Bazzite', title: 'Serviços úteis. Acesso privado.', intro: 'Keeper.sh e SongMirror rodam em um servidor Bazzite pessoal. Este site público explica o que fazem e como usam dados do Google.',
    privateTitle: 'As interfaces ficam na tailnet', privateText: 'As interfaces dos serviços são privadas e acessíveis apenas por dispositivos na tailnet do proprietário. Este site público é informativo e não contém links de administração.',
    services: 'Os serviços', keeper: 'Sincronização de calendários', keeperText: 'O Keeper.sh conecta contas do Google Calendar para sincronizar eventos entre calendários selecionados.', song: 'Sincronização de playlists', songText: 'O SongMirror conecta o YouTube Music pelo fluxo de autorização em dispositivo do Google para sincronizar playlists selecionadas.',
    privacyLead: 'Como os dois serviços usam dados do Google', privacyIntro: 'Esta política cobre as instâncias pessoais do Keeper.sh e do SongMirror no servidor Bazzite. Ela não descreve outros produtos PLUNZ nem os serviços hospedados pelos projetos originais.',
    keeperData: 'Keeper.sh · Google Calendar', keeperScope: 'Permissões do Google: calendar.events, calendar.calendarlist.readonly e userinfo.email.', keeperPurpose: 'O serviço lê a lista de calendários para selecionar calendários, usa o e-mail da conta para identificar a conexão e lê e grava eventos para sincronizar os calendários selecionados. Informações de eventos e contas vinculadas ficam nos dados locais do PostgreSQL.',
    songData: 'SongMirror · YouTube Music', songScope: 'Permissão do Google: https://www.googleapis.com/auth/youtube, concedida pelo fluxo de código para dispositivos.', songPurpose: 'O serviço acessa a conta do YouTube Music para sincronizar playlists selecionadas. Informações da conta, tokens, cache de correspondências, histórico e backups de playlists ficam no diretório de dados local.',
    storageTitle: 'Armazenamento e retenção', storageText: 'Tokens OAuth e dados dos serviços ficam no servidor Bazzite pessoal, no banco persistente do Keeper.sh e no diretório persistente do SongMirror. Os dados são mantidos durante o uso dos serviços. Para solicitar a exclusão dos dados e tokens armazenados de uma conta, escreva para o endereço abaixo. Não há promessa de prazo de exclusão automática.',
    sharingTitle: 'Compartilhamento e segurança', sharingText: 'Os serviços enviam às APIs do Google os dados necessários às suas funções. As interfaces são restritas à tailnet do proprietário; os contêineres escutam apenas na interface de loopback do servidor. O site público não tem login nem interface de administração. Dados dos serviços não são publicados aqui.',
    revokeTitle: 'Revogar acesso', revokeText: 'Você pode revogar o acesso de cada serviço nas permissões da sua Conta do Google. A revogação impede novos acessos autorizados à API; entre em contato para pedir a exclusão dos dados e tokens já armazenados no servidor.',
    contactTitle: 'Contato', contactText: 'Para dúvidas de privacidade e pedidos de exclusão:', updated: 'Última atualização: 10 de novembro de 2026',
    footer: 'Um projeto de servidor Bazzite pessoal da PLUNZ.'
  },
  es: {
    skip: 'Saltar al contenido', home: 'Inicio', privacy: 'Privacidad', navigation: 'Navegación principal', language: 'Idioma', system: 'Idioma del sistema',
    eyebrow: 'Servidor personal · Bazzite', title: 'Servicios útiles. Acceso privado.', intro: 'Keeper.sh y SongMirror funcionan en un servidor Bazzite personal. Este sitio público explica qué hacen y cómo usan los datos de Google.',
    privateTitle: 'Las interfaces permanecen en la tailnet', privateText: 'Las interfaces de los servicios son privadas y solo están disponibles para dispositivos en la tailnet del propietario. Este sitio público es informativo y no incluye enlaces de administración.',
    services: 'Los servicios', keeper: 'Sincronización de calendarios', keeperText: 'Keeper.sh conecta cuentas de Google Calendar para sincronizar eventos entre calendarios seleccionados.', song: 'Sincronización de listas de reproducción', songText: 'SongMirror conecta YouTube Music mediante el flujo de autorización en dispositivo de Google para sincronizar listas seleccionadas.',
    privacyLead: 'Cómo usan los datos de Google estos dos servicios', privacyIntro: 'Esta política cubre las instancias personales de Keeper.sh y SongMirror en el servidor Bazzite. No describe otros productos de PLUNZ ni los servicios alojados por los proyectos originales.',
    keeperData: 'Keeper.sh · Google Calendar', keeperScope: 'Permisos de Google: calendar.events, calendar.calendarlist.readonly y userinfo.email.', keeperPurpose: 'El servicio lee la lista de calendarios para elegirlos, usa el correo de la cuenta para identificar la conexión y lee y escribe eventos para sincronizar los calendarios seleccionados. Los datos de eventos y cuentas vinculadas se guardan en PostgreSQL local.',
    songData: 'SongMirror · YouTube Music', songScope: 'Permiso de Google: https://www.googleapis.com/auth/youtube, concedido mediante el flujo de código para dispositivos.', songPurpose: 'El servicio accede a la cuenta de YouTube Music para sincronizar listas seleccionadas. La información de la cuenta, los tokens, la caché de coincidencias, el historial y las copias de listas se almacenan en su directorio de datos local.',
    storageTitle: 'Almacenamiento y retención', storageText: 'Los tokens OAuth y los datos se almacenan en el servidor Bazzite personal, en la base persistente de Keeper.sh y el directorio persistente de SongMirror. Los datos se conservan mientras se usan los servicios. Para solicitar la eliminación de los datos y tokens de una cuenta, escriba a la dirección siguiente. No se promete un plazo de eliminación automática.',
    sharingTitle: 'Uso compartido y seguridad', sharingText: 'Los servicios envían a las API de Google los datos necesarios para sus funciones. Sus interfaces están restringidas a la tailnet del propietario y los contenedores escuchan solo en loopback. El sitio público no tiene inicio de sesión ni interfaz de administración. Aquí no se publican datos de los servicios.',
    revokeTitle: 'Revocar el acceso', revokeText: 'Puede revocar el acceso de cada servicio en los permisos de su Cuenta de Google. La revocación impide futuros accesos autorizados a la API; contáctenos para solicitar la eliminación de los datos y tokens ya almacenados en el servidor.',
    contactTitle: 'Contacto', contactText: 'Para consultas de privacidad y solicitudes de eliminación:', updated: 'Última actualización: 10 de noviembre de 2026',
    footer: 'Un proyecto de servidor Bazzite personal de PLUNZ.'
  }
} as const;
