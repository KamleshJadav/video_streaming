import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./pages/view-all-list/view-all-list.module').then(m => m.ViewAllListPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'preview-clips',
    loadChildren: () => import('./pages/preview-clips/preview-clips.module').then( m => m.PreviewClipsPageModule)
  },
  {
    path: 'video-play',
    loadChildren: () => import('./pages/video-play/video-play.module').then( m => m.VideoPlayPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'watchlist',
    loadChildren: () => import('./pages/watchlist/watchlist.module').then( m => m.WatchlistPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'supports',
    loadChildren: () => import('./pages/supports/supports.module').then( m => m.SupportsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./pages/subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
