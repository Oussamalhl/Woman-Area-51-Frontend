import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './admin/containers';
import { Page404Component } from './admin/views/pages/page404/page404.component';
import { Page500Component } from './admin/views/pages/page500/page500.component';
import { LoginComponent } from './admin/views/pages/login/login.component';
import { RegisterComponent } from './admin/views/pages/register/register.component';
import {DefaultLayoutUComponent} from "./user/default-layout-u/default-layout-u.component";
import {CommingSoonComponent} from "./user/comming-soon/comming-soon.component";
import {UserIndexComponent} from "./user/user-index/user-index.component";
import {SigninComponent} from "./user/signin/signin.component";
import {PaginationsComponent} from "./admin/views/base/paginations/paginations.component";
import {AdminComplaintAddComponent} from "./admin/complaint/admin-complaint-add/admin-complaint-add.component";
import {AdminComplaintShowComponent} from "./admin/complaint/admin-complaint-show/admin-complaint-show.component";
import {ChatBotComponent} from "./chat-bot/chat-bot.component";
import {
  AdminExpertInterviewAddComponentComponent
} from "./admin/expertinterview/admin-expert-interview-add-component/admin-expert-interview-add-component.component";
import {UserAddComplaintComponent} from "./user/complaint/user-add-complaint/user-add-complaint.component";
import {UserShowComplaintComponent} from "./user/complaint/user-show-complaint/user-show-complaint.component";
import {
  UserShowExpertInterviewComponent
} from "./user/experinterview/user-show-expert-interview/user-show-expert-interview.component";
import {
  UserAddExpertInterviewComponent
} from "./user/experinterview/user-add-expert-interview/user-add-expert-interview.component";
import {
  AdminShowExpertInterviewComponent
} from "./admin/expertinterview/admin-show-expert-interview/admin-show-expert-interview.component";
import {
  AdminRateExpertInterviewComponent
} from "./admin/expertinterview/admin-rate-expert-interview/admin-rate-expert-interview.component";
import {
  AdminUpdateExpertInterviewComponent
} from "./admin/expertinterview/admin-update-expert-interview/admin-update-expert-interview.component";
import {
  AdminBestRatingExpertInterviewComponent
} from "./admin/expertinterview/admin-best-rating-expert-interview/admin-best-rating-expert-interview.component";
import {
  AdminExpertsStatsExpertInterviewComponent
} from "./admin/expertinterview/admin-experts-stats-expert-interview/admin-experts-stats-expert-interview.component";
import {AdminUpdateComplaintComponent} from "./admin/complaint/admin-update-complaint/admin-update-complaint.component";
import {
  UserRateExpertInterviewComponent
} from "./user/experinterview/user-rate-expert-interview/user-rate-expert-interview.component";
import {UserChatBotComponent} from "./user/chatbot/user-chat-bot/user-chat-bot.component";

const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutUComponent,
    children:[

     /* {
        path : '',
        component : CommingSoonComponent
      },*/
      {
        path : 'signin',
        component : SigninComponent
      },
      {
        path : 'complaint/add',
        component : UserAddComplaintComponent
      },
      {
        path : 'complaint/show',
        component : UserShowComplaintComponent
      },
      {
        path : 'expertinterview/show',
        component : UserShowExpertInterviewComponent
      },
      {
        path : 'expertinterview/add',
        component : UserAddExpertInterviewComponent
      },
      {
        path : 'expertinterview/rate/:id',
        component : UserRateExpertInterviewComponent
      },
      {
        path : 'uchatbot/chat',
        component : UserChatBotComponent
      },

      {
        path : '',
        component : UserIndexComponent
      }
    ]
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'course/add',
        component: PaginationsComponent
      },
      {
        path: 'complaint/add',
        component: AdminComplaintAddComponent
      },
      {
        path: 'complaint/show',
        component: AdminComplaintShowComponent
      },
      {
        path: 'complaint/edit/:id',
        component: AdminUpdateComplaintComponent
      },
      {
        path: 'chatbot',
        component: ChatBotComponent
      },
      {
        path: 'expertinterview/show',
        component: AdminShowExpertInterviewComponent
      },
      {
        path: 'expertinterview/add',
        component: AdminExpertInterviewAddComponentComponent
      },
      {
        path: 'expertinterview/rate/:id',
        component: AdminRateExpertInterviewComponent
      },
      {
        path: 'expertinterview/edit/:id',
        component: AdminUpdateExpertInterviewComponent
      },
      {
        path: 'expertinterview/bestrating',
        component: AdminBestRatingExpertInterviewComponent
      },
      {
        path: 'expertinterview/expertstat',
        component: AdminExpertsStatsExpertInterviewComponent
      },
      {
        path: '',
        loadChildren: () =>
          import('./admin/views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./admin/views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./admin/views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./admin/views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./admin/views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./admin/views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./admin/views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./admin/views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./admin/views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./admin/views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'admin/login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',

      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
