import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-inventory-priority',
  templateUrl: './dialog-inventory-priority.component.html',
  styleUrls: ['./dialog-inventory-priority.component.scss']
})
export class DialogInventoryPriorityComponent implements OnInit{

  selected_color: string = '';

  font_color: string = '';
  background_color: string = '';

  colors: Array<Array<{ bg_color: string; font_color: string; }>> = [
    [
      {
        bg_color: '#f4dcdc',
        font_color: '#000000',
      },
      {
        bg_color: '#FBE0B9',
        font_color: '#000000',
      },
      {
        bg_color: '#EBFBDC',
        font_color: '#000000',
      },
      {
        bg_color: '#E6F8FC',
        font_color: '#000000',
      },
      {
        bg_color: '#D8D8FF',
        font_color: '#000000',
      },
      {
        bg_color: '#F5E1FE',
        font_color: '#000000',
            },
      {
        bg_color: '#FFE5F3',
        font_color: '#000000',
            },
    ],
    [
      {
        bg_color: '#CEABAB',
        font_color: '#000000',
            },
      {
        bg_color: '#BFB19B',
        font_color: '#000000',
            },
      {
        bg_color: '#B7D798',
        font_color: '#000000',
            },
      {
        bg_color: '#B3E3EE',
        font_color: '#000000',
            },
      {
        bg_color: '#9695E1',
        font_color: '#000000',
            },
      {
        bg_color: '#D5A8EA',
        font_color: '#000000',
            },
      {
        bg_color: '#E9AFCE',
        font_color: '#000000',
            },
    ],
    [
      {
        bg_color: '#DB8888',
        font_color: '#000000',

      },
      {
        bg_color: '#D7B868',
        font_color: '#000000',

      },
      {
        bg_color: '#8ABA59',
        font_color: '#000000',

      },
      {
        bg_color: '#74B8C8',
        font_color: '#F5F6F6',

      },
      {
        bg_color: '#6665B2',
        font_color: '#F5F6F6',

      },
      {
        bg_color: '#A561C5',
        font_color: '#F5F6F6',

      },
      {
        bg_color: '#CC79A5',
        font_color: '#F5F6F6',

      },
    ],
    [
      {
        bg_color: '#DD6767',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#FA9600',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#6B894D',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#4D94A4',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#35347A',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#6C3C83',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#9C4875',
        font_color: '#F5F6F6',
            },
    ],
    [
      {
        bg_color: '#F64B4B',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#B67310',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#3E7309',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#0E6275',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#0B0A65',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#541771',
        font_color: '#F5F6F6',
            },
      {
        bg_color: '#962060',
        font_color: '#F5F6F6',
            },
    ],
  ];



  priority = new FormGroup({
    state_name: new FormControl('', Validators.required),
    about_priority: new FormControl('', Validators.required),
    bg_color: new FormControl('', Validators.required),
    font_color: new FormControl('', Validators.required),
  });

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogInventoryPriorityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title:string,
      btn_title:string
    },
  ){}

  ngOnInit(): void {

  }

  // colorpicker: boolean = false;

  // color_picker_table() {
  //   console.log('Colorpicker');
  //   this.colorpicker = true;
  // }


  getColor(color: { bg_color: string; font_color: string; }): void {
    // this.colorpicker = false;
    console.log('asas');
    this.font_color = color['font_color'];
    this.background_color = color['bg_color'];
    this.selected_color = color['bg_color'] + ', ' + color['font_color'];

    // Adding bg_color & font_color to form
    this.priority.patchValue({
      bg_color: color['bg_color'],
      font_color: color['font_color'],
    });

  }

  setBackgroundColorGroupClone(index: number):void{

    $('.table_color_div').children('table').children('tr').children('td').removeClass('active')
    $('#clone_' + index).addClass('active')
  }

  onCreatePriority(){
    console.log(this.priority.value);
  }

}
