import { TabCurrentModule } from './tab-current.module';

describe('TabCurrentModule', () => {
  let tabCurrentModule: TabCurrentModule;

  beforeEach(() => {
    tabCurrentModule = new TabCurrentModule();
  });

  it('should create an instance', () => {
    expect(tabCurrentModule).toBeTruthy();
  });
});
