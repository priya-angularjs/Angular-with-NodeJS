import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { NgbModalModule, NgbDatepickerModule,
  NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { SchedulerComponent } from './scheduler.component';
import {MatIconModule, MatButtonModule, MatCardModule, MatDialogModule,
  MatToolbarModule, MatChipsModule,
  MatInputModule, MatFormFieldModule, MatDatepickerModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {DialogModule} from 'primeng/dialog';
import {ScheduleModule} from 'primeng/schedule';
import {DragDropModule} from 'primeng/dragdrop';
import {AuthenticationService} from '../service/authentication.service';
import {APP_CONFIG, AppConfig} from '../app.config';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule,
     NgbTimepickerModule, NgbDatepickerModule, MatChipsModule, DragDropModule, DropdownModule,
    MatIconModule, MatDatepickerModule, ScheduleModule, MatToolbarModule, ReactiveFormsModule, MatSelectModule,
    MatButtonModule, DialogModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, ChipsModule
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }, AuthenticationService],
  declarations: [SchedulerComponent],
  exports: [SchedulerComponent]
})
export class SchedulerModule {}
