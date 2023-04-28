// Subject class that represents the TA application and provides methods to add, remove, and notify observers
export class TAApplicationSubject {
  private observers: ProfessorObserver[] = [];
  private taInfo = {
    name: '',
    class: '',
    year: ''
  };

  addObserver(observer: ProfessorObserver) {
    this.observers.push(observer);
  }

  removeObserver(observer: ProfessorObserver) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.taInfo);
    });
  }

  setTAInfo(name: string, taClass: string, year: string) {
    this.taInfo = {
      name: name,
      class: taClass,
      year: year
    };
    this.notifyObservers();
  }
}

// Observer class that represents the professor who is interested in receiving real-time updates about the TA application
export class ProfessorObserver {
  private professorName: string;

  constructor(professorName: string) {
    this.professorName = professorName;
  }

  update(taInfo: { name: string; class: string; year: string }) {
    console.log(`From Professor Observer - ${this.professorName}: New TA application from ${taInfo.name} for class ${taInfo.class} in year ${taInfo.year}`);
  }
}
