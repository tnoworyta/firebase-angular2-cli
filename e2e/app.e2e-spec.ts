import { FirebaseAngular2CliPage } from './app.po';

describe('firebase-angular2-cli App', function() {
  let page: FirebaseAngular2CliPage;

  beforeEach(() => {
    page = new FirebaseAngular2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
