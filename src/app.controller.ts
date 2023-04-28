import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfessorObserver, TAApplicationSubject } from './Observer/observer';
import { TAProfile } from './Singleton/singleton';
import { DataConverter, JSONDataAdapter, TAData, XMLDataAdapter } from './Adapter/adapter';

@Controller()
export class AppController {

  // Oberserver variables
  taApplicationSubject: TAApplicationSubject;
  professorObserver: ProfessorObserver[] = [];

  // Intiation for Singleton and Observer
  constructor(private readonly appService: AppService) {
    // Singleton: Initiation, initiate TAProfile by calling getInstance and initiate to 0 total applications
    // Number of total applications can be fetch from the database
    // For implementation, we will initiate with 0
    TAProfile.getInstance(0);

    // Observer: Intiation
    this.taApplicationSubject = new TAApplicationSubject();
    this.professorObserver.push(new ProfessorObserver('Professor A'));
    this.professorObserver.push(new ProfessorObserver('Professor B'));
    this.professorObserver.push(new ProfessorObserver('Professor C'));

    // Observer: Add observer
    this.professorObserver.forEach((item) => {
      this.taApplicationSubject.addObserver(item)
    });
  }
  
  // 1/ Singleton Pattern
  // Description: Whenever the user apply this will update the singleton TAProfile
  @Get('applyToTAJob')
  applyJob() {
    // ... handling apply
    
    // After apply, increase the profile total count of applications
    TAProfile.increaseApplicationNumber();

    // This will show to the postman console
    return "Applied, current total applications number: " + TAProfile.getTotalApplciationNumber();
  }

  // 2/ Adapter Pattern
  // Description: This will fetch the data from the database
  // Convert the data into two different format using Adapter Pattern

  // Fetch TAData
  getTAData() {
    return { grade: '3.8/4.0', major: 'CS' };
  }
  @Get('getTAScoreFormat')
  getTAScoreFormat() {
    // Assume we have a fetch function that return the TAData from the Database
    // Even though this is json data, returning it will be in this format: [Object] since it's an object
    const jsonTAData = this.getTAData();

    // Convert to TAData type
    const taData = new TAData(jsonTAData.grade, jsonTAData.major);

    // Create two adapter for JSON and XML
    const jsonAdapter = new JSONDataAdapter();
    const xmlAdapter = new XMLDataAdapter();

    const jsonConverter = new DataConverter(jsonAdapter);
    const xmlConverter = new DataConverter(xmlAdapter);

    const jsonResult = jsonConverter.convert(taData);
    const xmlResult = xmlConverter.convert(taData);

    console.log("Converting data using adapter design pattern")
    console.log(jsonResult);
    console.log(xmlResult);

    return "Original data from database: " + jsonTAData + "\nConverted from TAData to json and xml using adapter design pattern: \n - JSON: " + jsonResult + "\n - XML:\n\t" + xmlResult
  }

  // 3/ Observer Pattern
  // Description: calling addta will add the ta which the professor is subcribed to
  // There will be a console message triggered by the observer whenever a ta is updated
  // Implemented location: src/Observer/observer.js
  @Get('addta')
  addTAController() {
    // After calling this there will be a console log trigger by the observer (not by the setTAInfo)
    this.taApplicationSubject.setTAInfo('Eric', 'CS4345', '2023')
    return "Added TA Information Successfully, check the console to see the observer's update"
  }
}
