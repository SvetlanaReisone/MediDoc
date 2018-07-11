import { TabHistoryModule } from './tab-history.module';

describe('TabHistoryModule', () => {
  let tabHistoryModule: TabHistoryModule;

  beforeEach(() => {
    tabHistoryModule = new TabHistoryModule();
  });

  it('should create an instance', () => {
    expect(tabHistoryModule).toBeTruthy();
  });
});
