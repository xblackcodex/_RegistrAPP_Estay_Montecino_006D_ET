import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getPrueba1()).toContain('Menu');
  });

  it('Prueba 2', async () => {
    page.navigateTo();
    expect(page.getPrueba2()).toContain('Cerrar Sesion');
  });

  it('Prueba 3', async () => {
    page.navigateTo();
    expect(page.getPrueba3()).toContain('name');
   });
   
   it('Prueba 4', async () => {
    page.navigateTo();
    expect(page.getPrueba4()).toContain('inicio');
   });

   it('Prueba 5', async () => {
    page.navigateTo();
    expect(page.getPrueba5()).toContain('Codigo QR');
   });
});
