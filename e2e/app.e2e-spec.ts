import { VideoStoreAdminV2Page } from './app.po';

describe('video-store-admin-v2 App', function() {
  let page: VideoStoreAdminV2Page;

  beforeEach(() => {
    page = new VideoStoreAdminV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
