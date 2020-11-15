import { Component, OnInit } from '@angular/core';
// import { EChartOption } from 'echarts';
// import { DashboardService } from '../../../service/dashboard.service';
// import { CollegeService } from '../../../service/college.service';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  name: Array<string>;

  number: Array<number>;

  // chartOption: EChartOption;

  title = environment.title;

  constructor(
    // private dashboardService: DashboardService,
    // private collegeService: CollegeService
  ) {
  }

  ngOnInit(): void {
    // this.collegeService.getAll().subscribe((colleges: Array<College>) => {
    //   this.countSubjectNumber(colleges);
    // });

    /** 初始化 */
    this.name = new Array<string>();
    this.number = new Array<number>();
  }

  // public countSubjectNumber(colleges: Array<College>) {
  //   colleges.forEach((college) => {
  //     Assert.isDefined(college.name, '名称name不能为空');
  //     Assert.isDefined(college.id, 'id不能为空');
  //     this.dashboardService.countSubjectNumber(college.id)
  //       .subscribe((data: number) => {
  //         this.name.push(college.name);
  //         this.number.push(data);
  //
  //         this.chartOption = {
  //           title: {
  //             text: '各学院题库统计表'
  //           },
  //           tooltip: {
  //             trigger: 'axis',
  //             axisPointer: {
  //               type: 'shadow'
  //             }
  //           },
  //           xAxis: {
  //             type: 'value'
  //           },
  //           yAxis: {
  //             type: 'category',
  //             data: this.name
  //
  //           },
  //           series: [
  //             {
  //               name: '题量',
  //               type: 'bar',
  //               itemStyle: {
  //                 color: '#09BB07'
  //               },
  //               data: this.number
  //             }
  //           ]
  //         };
  //       });
  //
  //   });
  // }
}
