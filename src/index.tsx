import { createEffect, createSignal, onCleanup, Show } from 'solid-js';
import { render } from 'solid-js/web';
import { Theme } from '@plunz/storybook';
import { copy, detectLocale, readPreference, savePreference, type Locale, type Preference } from './locale';
import '@plunz/storybook/styles.css';
import './style.css';

const contact = 'henriquecastro1198+bazzite@gmail.com';
const isPrivacy = () => location.pathname === '/privacy' || location.pathname === '/privacy/';

function Mark() {
  return <svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" fill="#0f0f0f"/><path d="M32 6 21 23h8v9h6v-9h8Z" fill="#f6b6ab"/><path d="m32 58 11-17h-8v-9h-6v9h-8Z" fill="#89b4fa"/><path d="M6 32 23 21v8h9v6h-9v8Z" fill="#a6e3a1"/><path d="m58 32-17 11v-8h-9v-6h9v-8Z" fill="#f38ba8"/></svg>;
}

function App() {
  const [preference, setPreference] = createSignal<Preference>(readPreference());
  const [systemLocale, setSystemLocale] = createSignal<Locale>(detectLocale());
  const [privacy, setPrivacy] = createSignal(isPrivacy());
  const locale = (): Locale => preference() === 'system' ? systemLocale() : preference() as Locale;
  const t = (key: keyof typeof copy.en) => copy[locale()][key];
  const onPop = () => setPrivacy(isPrivacy());
  const onLanguage = () => setSystemLocale(detectLocale());
  const navigate = (event: MouseEvent, path: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); history.pushState(null, '', path); onPop(); window.scrollTo(0, 0);
  };
  window.addEventListener('popstate', onPop);
  window.addEventListener('languagechange', onLanguage);
  onCleanup(() => { window.removeEventListener('popstate', onPop); window.removeEventListener('languagechange', onLanguage); });
  createEffect(() => {
    document.documentElement.lang = locale();
    document.title = `${privacy() ? t('privacy') : t('title')} | PLUNZ`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', privacy() ? t('privacyIntro') : t('intro'));
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://bazzite.plu.nz${privacy() ? '/privacy' : '/'}`);
  });
  return <Theme accent="green" shape="square">
    <a class="skip" href="#main">{t('skip')}</a>
    <header class="header shell">
      <a class="brand" href="/" onClick={event => navigate(event, '/')} aria-label="PLUNZ"><Mark/><span>PLUNZ<span class="orange">.</span></span></a>
      <nav aria-label={t('navigation')}><a href="/" aria-current={!privacy() ? 'page' : undefined} onClick={event => navigate(event, '/')}>{t('home')}</a><a href="/privacy" aria-current={privacy() ? 'page' : undefined} onClick={event => navigate(event, '/privacy')}>{t('privacy')}</a></nav>
      <label class="language"><span>{t('language')}</span><select aria-label={t('language')} value={preference()} onChange={event => { const value = event.currentTarget.value as Preference; setPreference(value); savePreference(value); }}><option value="system">{t('system')}</option><option value="en">English</option><option value="pt">Português</option><option value="es">Español</option></select></label>
    </header>
    <main id="main" class="shell">
      <Show when={!privacy()} fallback={<>
        <section class="page-head"><p class="eyebrow">{t('eyebrow')}</p><h1>{t('privacyLead')}</h1><p class="lead">{t('privacyIntro')}</p><p class="updated">{t('updated')}</p></section>
        <div class="policy-grid">
          <section class="panel"><span class="number">01 / GOOGLE CALENDAR</span><h2>{t('keeperData')}</h2><p class="scope">{t('keeperScope')}</p><p>{t('keeperPurpose')}</p></section>
          <section class="panel"><span class="number">02 / YOUTUBE MUSIC</span><h2>{t('songData')}</h2><p class="scope">{t('songScope')}</p><p>{t('songPurpose')}</p></section>
        </div>
        <div class="policy-rest">
          <section><h2>{t('storageTitle')}</h2><p>{t('storageText')}</p></section>
          <section><h2>{t('sharingTitle')}</h2><p>{t('sharingText')}</p></section>
          <section><h2>{t('revokeTitle')}</h2><p>{t('revokeText')}</p></section>
          <section><h2>{t('contactTitle')}</h2><p>{t('contactText')} <a href={`mailto:${contact}`}>{contact}</a></p></section>
        </div>
      </>}>
        <section class="hero"><div><p class="eyebrow">{t('eyebrow')}</p><h1>{t('title')}</h1><p class="lead">{t('intro')}</p><a class="cta" href="/privacy" onClick={event => navigate(event, '/privacy')}>{t('privacy')} <span aria-hidden="true">↗</span></a></div><div class="hero-art" aria-hidden="true"><div class="orbit one"/><div class="orbit two"/><Mark/></div></section>
        <section class="private"><span class="number">01 / ACCESS</span><div><h2>{t('privateTitle')}</h2><p>{t('privateText')}</p></div></section>
        <section class="services"><div class="section-heading"><span class="number">02 / SERVICES</span><h2>{t('services')}</h2></div><div class="cards"><article class="panel"><span class="card-symbol calendar" aria-hidden="true">▦</span><p class="number">GOOGLE CALENDAR</p><h3>Keeper.sh</h3><p class="category">{t('keeper')}</p><p>{t('keeperText')}</p></article><article class="panel"><span class="card-symbol music" aria-hidden="true">♫</span><p class="number">YOUTUBE MUSIC</p><h3>SongMirror</h3><p class="category">{t('song')}</p><p>{t('songText')}</p></article></div></section>
      </Show>
    </main>
    <footer class="footer shell"><span>PLUNZ<span class="orange">.</span></span><p>{t('footer')}</p><a href="/privacy" onClick={event => navigate(event, '/privacy')}>{t('privacy')}</a></footer>
  </Theme>;
}

render(() => <App/>, document.getElementById('root')!);
