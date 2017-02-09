import { Inf1183v1Page } from './app.po';

describe('inf1183v1 App', function() {
  let page: Inf1183v1Page;

  beforeEach(() => {
    page = new Inf1183v1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
