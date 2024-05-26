import { Component, OnInit, inject } from '@angular/core';


import { DataServiceService } from 'src/app/services/data-service.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
  })

export class ChartsComponent implements OnInit{
  public dataService = inject(DataServiceService);

  basicData: any;
  modalidyData: any;
  eventData: any;
  basicOptions: any;
  countryData: any;
  planData:any; 
  frequencyData:any;
  profileData:any;
  companyData: any;

  constructor(){
    this.eventData = this.dataService.getEventData;
    this.modalidyData = this.dataService.getModalidyData;
    this.countryData = this.dataService.getCountryData;
    this.planData = this.dataService.getPlanData;
    this.frequencyData = this.dataService.getFrequencyData;
    this.companyData = this.dataService.getCompanyData;
    this.profileData = this.dataService.getProfileData;
  }

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.eventData = {
          labels: this.eventData.labels,
          datasets: [
              {
                  label: 'Event',
                  data: this.eventData.counts,
                  backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                  borderWidth: 1
              }
          ]
      };

    this.modalidyData = {
        labels: this.modalidyData.labels,
        datasets: [
            {
                label: 'Modality',
                data: this.modalidyData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.planData = {
        labels: this.planData.labels,
        datasets: [
            {
                label: 'Plan',
                data: this.planData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.countryData = {
        labels: this.countryData.labels,
        datasets: [
            {
                label: 'Country',
                data: this.countryData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.frequencyData = {
        labels: this.frequencyData.labels,
        datasets: [
            {
                label: 'Frequency',
                data: this.frequencyData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.companyData = {
        labels: this.companyData.labels,
        datasets: [
            {
                label: 'Company',
                data: this.companyData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.profileData = {
        labels: this.profileData.labels,
        datasets: [
            {
                label: 'Profile',
                data: this.profileData.counts,
                backgroundColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 165, 0, 0.6)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
          indexAxis:'y',
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
