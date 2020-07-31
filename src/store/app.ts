import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { getSidebarStatus, getSize, setSidebarStatus, setLanguage, setSize, getTheme, setTheme } from '@/utils/local-store';
import { getLocale } from '@/lang';
import store from '@/store';
import { applyTheme } from '@/utils/theme';

export enum DeviceType {
  Mobile,
  Desktop,
}


export interface AppState {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
  language: string;
  size: string;
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  public sidebar = {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  }

  public device = DeviceType.Desktop

  public language = getLocale()

  public size = getSize() || 'medium'

  public theme = getTheme() || 'auto'

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Mutation
  private SET_LANGUAGE(language: string) {
    this.language = language
    setLanguage(this.language)
  }

  @Mutation
  private SET_SIZE(size: string) {
    this.size = size
    setSize(this.size)
  }

  @Mutation
  private SET_THEME(theme: string) {
    this.theme = theme
    setTheme(theme);
    applyTheme(theme);
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public SetLanguage(language: string) {
    this.SET_LANGUAGE(language)
  }

  @Action
  public SetSize(size: string) {
    this.SET_SIZE(size)
  }

  @Action
  public SetTheme(theme: string) {
    this.SET_THEME(theme)
  }
}

export const AppModule = getModule(App)