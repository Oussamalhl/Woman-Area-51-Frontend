import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './admin/containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule, PopoverModule,
  ProgressModule,
  SharedModule,
  SidebarModule, TableModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { DefaultLayoutUComponent } from './user/default-layout-u/default-layout-u.component';
import { DefaultFooterUComponent } from './user/default-layout-u/default-footer-u/default-footer-u.component';
import { DefaultHeaderUComponent } from './user/default-layout-u/default-header-u/default-header-u.component';
import { CommingSoonComponent } from './user/comming-soon/comming-soon.component';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { SigninComponent } from './user/signin/signin.component';
import { AdminComplaintAddComponent } from './admin/complaint/admin-complaint-add/admin-complaint-add.component';
import { AdminComplaintShowComponent } from './admin/complaint/admin-complaint-show/admin-complaint-show.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import {AngularBotModule} from "./chat-bot/angular-bot-module.module";
import { AdminExpertInterviewAddComponentComponent } from './admin/expertinterview/admin-expert-interview-add-component/admin-expert-interview-add-component.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UserAddComplaintComponent } from './user/complaint/user-add-complaint/user-add-complaint.component';
import { UserShowComplaintComponent } from './user/complaint/user-show-complaint/user-show-complaint.component';
import { UserAddExpertInterviewComponent } from './user/experinterview/user-add-expert-interview/user-add-expert-interview.component';
import { UserShowExpertInterviewComponent } from './user/experinterview/user-show-expert-interview/user-show-expert-interview.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { AdminShowExpertInterviewComponent } from './admin/expertinterview/admin-show-expert-interview/admin-show-expert-interview.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatOptionModule} from "@angular/material/core";
import { AdminRateExpertInterviewComponent } from './admin/expertinterview/admin-rate-expert-interview/admin-rate-expert-interview.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AdminUpdateExpertInterviewComponent } from './admin/expertinterview/admin-update-expert-interview/admin-update-expert-interview.component';
import { AdminBestRatingExpertInterviewComponent } from './admin/expertinterview/admin-best-rating-expert-interview/admin-best-rating-expert-interview.component';
import { AdminExpertsStatsExpertInterviewComponent } from './admin/expertinterview/admin-experts-stats-expert-interview/admin-experts-stats-expert-interview.component';
import {MatRadioModule} from "@angular/material/radio";
import { AdminUpdateComplaintComponent } from './admin/complaint/admin-update-complaint/admin-update-complaint.component';
import { UserRateExpertInterviewComponent } from './user/experinterview/user-rate-expert-interview/user-rate-expert-interview.component';
import { UserChatBotComponent } from './user/chatbot/user-chat-bot/user-chat-bot.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, DefaultLayoutUComponent, DefaultFooterUComponent, DefaultHeaderUComponent, CommingSoonComponent, UserIndexComponent, SigninComponent, AdminComplaintAddComponent, AdminComplaintShowComponent, AdminExpertInterviewAddComponentComponent, UserAddComplaintComponent, UserShowComplaintComponent, UserAddExpertInterviewComponent, UserShowExpertInterviewComponent, AdminShowExpertInterviewComponent, AdminRateExpertInterviewComponent, AdminUpdateExpertInterviewComponent, AdminBestRatingExpertInterviewComponent, AdminExpertsStatsExpertInterviewComponent, AdminUpdateComplaintComponent, UserRateExpertInterviewComponent, UserChatBotComponent ],
    imports: [
        BrowserModule,
        ScheduleModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        PerfectScrollbarModule,
        NavModule,
        ButtonModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,

        FormsModule,

        CardModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        AngularBotModule,
        MatIconModule,
        MatButtonModule,
        TableModule,
        MatSortModule,
        MatTableModule,
        PopoverModule,
        MatPaginatorModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatOptionModule,
        NgxStarRatingModule,
        MatRadioModule


    ],
  providers: [
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
