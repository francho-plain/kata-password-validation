export interface Rule {
  isValid: (password: string) => boolean;
}

export class LengthRule implements Rule {
  public isValid(password: string): boolean {
    return password.length > 8;
  }
}

export class CapitalRule implements Rule {
  public isValid(password: string): boolean {
    return /[A-Z]/.test(password);
  }
}

export class LowerCaseRule implements Rule {
  public isValid(password: string): boolean {
    return /[a-z]/.test(password);
  }
}

export class PasswordValidator {
  private rules: Rule[] = [];
  constructor() {
    this.rules = [new LengthRule(), new CapitalRule(), new LowerCaseRule()];
  }
  public validate(password: string) {
    return this.rules.every((rule) => rule.isValid(password));
  }
}
