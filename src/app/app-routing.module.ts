import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent }from './skills/skills.component';
import { ResmueComponent } from './resmue/resmue.component';
import { MarkdownRenderComponent } from './markdown-render/markdown-render.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'skills',
  component: SkillsComponent
},
{
  path: 'resume',
  component: ResmueComponent
},
{
  path: 'blog/:id',
  component: MarkdownRenderComponent
},
{
  path: 'blog',
  component: BlogComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
