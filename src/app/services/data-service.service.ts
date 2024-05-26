import { Injectable } from '@angular/core';

const data = [
  {
    "Date": "01/02/2024",
    "Event": "Buy",
    "Modality": "One-Time",
    "Plan": "Free",
    "Frequency": "Monthly",
    "Mrr": "$0,00",
    "New mrr": "$0,00",
    "Churn mrr": "$0,00",
    "New churn mrr": "$0,00",
    "Net mrr": "$0,00",
    "Arpa": "$5,00",
    "Lt": 4,
    "Ltv": "$5,00",
    "Country": "USA",
    "Company": "Company 1",
    "Profile": "Broker"
  },
  {
    "Date": "12/01/2024",
    "Event": "Sell",
    "Modality": "Recurring",
    "Plan": "Pay",
    "Frequency": "Monthly",
    "Mrr": "$0,00",
    "New mrr": "$0,00",
    "Churn mrr": "$0,00",
    "New churn mrr": "$0,00",
    "Net mrr": "$0,00",
    "Arpa": "$5,00",
    "Lt": 4,
    "Ltv": "$5,00",
    "Country": "Argentina",
    "Company": "Company 3",
    "Profile": "Broker"
  },
  {
    "Date": "12/01/2024",
    "Event": "Sell",
    "Modality": "Recurring",
    "Plan": "Free",
    "Frequency": "Yearly",
    "Mrr": "$0,00",
    "New mrr": "$0,00",
    "Churn mrr": "$0,00",
    "New churn mrr": "$0,00",
    "Net mrr": "$0,00",
    "Arpa": "$5,00",
    "Lt": 4,
    "Ltv": "$5,00",
    "Country": "Germany",
    "Company": "Company 4",
    "Profile": "Broker"
  },
]


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  countOccurrences(arr: any[], propertyToCount: string) {
    let counts: number[] = [];
    const labels: string[] = [];
  
    arr.forEach((obj: any) => {
      const value = obj[propertyToCount];
  
      if (!labels.includes(value)) {
        labels.push(value);
        counts.push(1);
      } else {
        const index = labels.indexOf(value);
        counts[index]++;
      }
    });
  
    return { counts, labels };
  }

  get getData(){ return data }
  get getEventData(){ return this.countOccurrences(data,"Event") }
  get getModalidyData(){ return this.countOccurrences(data,"Modality") }
  get getPlanData(){ return this.countOccurrences(data,"Plan") }
  get getProfileData(){ return this.countOccurrences(data,"Profile") }
  get getCountryData(){ return this.countOccurrences(data,"Country") }
  get getFrequencyData(){ return this.countOccurrences(data,"Frequency") }
  get getCompanyData(){ return this.countOccurrences(data,"Company") }


}
