import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BottomSheetComponent } from 'src/app/bottom-sheet/bottom-sheet.component';
import { sessionStorage } from 'src/app/localstorage.service';
import { DatabaseService } from 'src/_services/DatabaseService';
import { ProductWiseSecondaryReportModalComponent } from './product-wise-secondary-report-modal/product-wise-secondary-report-modal.component';

@Component({
  selector: 'app-prouct-wise-secondary-report',
  templateUrl: './prouct-wise-secondary-report.component.html',
  styleUrls: ['./prouct-wise-secondary-report.component.scss']
})
export class ProuctWiseSecondaryReportComponent implements OnInit {
  loader: boolean = false;
  secondaryProductReportList: any = [];
  search: any = {};
  login_data: any = [];

  constructor(private bottomSheet: MatBottomSheet, public service: DatabaseService, public toast: ToastrManager, public session: sessionStorage, public dialog: MatDialog,) {
    this.login_data = this.session.getSession();
    this.login_data = this.login_data.value.data;
  }

  ngOnInit() {

  }

  refresh(){
    this.getSecondaryProductWiseReport()
  }



  getSecondaryProductWiseReport() {
    this.loader = true;
    this.service.post_rqst({ 'search': this.search }, 'Reports/productWiseSecondaryReport').subscribe((resp) => {
      console.log(resp)
      if (resp['statusCode'] == 200) {
        this.secondaryProductReportList = resp['result']['order_item'];
        this.loader = false;

      }
      else {
        this.toast.errorToastr(resp['statusMsg']);
      }
    }, err => {
      this.loader = false;

    })
  }



  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        'filterPage': 'product_wise_secondary_report',
      }
    });
    this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe((data) => {
      this.search.date_from = data.date_from;
      this.search.date_to = data.date_to;
      this.search.userId = data.user_id;
      this.getSecondaryProductWiseReport();
    })
  }

  getproductWiseSecondaryReportExcel() {
    this.loader = true;
    this.service.post_rqst({ 'search': this.search }, "Excel/productWiseSecondaryReport").subscribe((result) => {
      if (result['msg'] == true) {
        this.loader = false;
        window.open(this.service.downloadUrl + result['filename'])
        this.getSecondaryProductWiseReport();
      }
    });
  }

  openProductWiseSecondarySubCategoryReport(drId, category, startDate, endDate, salesUserId): void {
    const dialogRef = this.dialog.open(ProductWiseSecondaryReportModalComponent, {
      width: '800px',
      panelClass: 'cs-modal',
      data: {
        'from': 'product-wise-sub-category',
        drId: drId,
        category: category,
        startDate: startDate,
        endDate: endDate,
        salesUserId: salesUserId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != false) {

      }

    });
  }

}
