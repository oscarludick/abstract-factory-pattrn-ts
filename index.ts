interface UIButton {
  create(): string;
}

abstract class ThemeFactory {
  abstract createButton(): UIButton;
}

class LightButton implements UIButton {
  create(): string {
    return "Light Button created";
  }
}

class DarkButton implements UIButton {
  create(): string {
    return "Dark Button created";
  }
}

class BlueThemeFactory extends ThemeFactory {
  createButton(): UIButton {
    return new LightButton();
  }
}

class LightThemeFactory extends ThemeFactory {
  createButton(): UIButton {
    return new LightButton();
  }
}

class DarkThemeFactory extends ThemeFactory {
  createButton(): UIButton {
    return new DarkButton();
  }
}

const factory: ThemeFactory = new LightThemeFactory();
console.log(factory.createButton());
