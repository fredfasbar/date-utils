// property/date.ts
export interface DateOptions {
    years?: number;
    year?: number;
    months?: number;
    month?: number;
    days?: number;
    day?: number;
    hours?: number;
    hour?: number;
    minutes?: number;
    minute?: number;
    seconds?: number;
    second?: number;
  }
  
  export class DateTimeProperty {
    private options: DateOptions;
  
    constructor(options: DateOptions = {}) {
      this.options = options;
    }
  
    getOptions(): DateOptions {
      return this.options;
    }
  
    setOptions(newOptions: DateOptions): void {
      this.options = { ...this.options, ...newOptions };
    }
  }
  