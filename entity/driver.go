package entity

import "github.com/jinzhu/gorm"

type Driver struct {
	gorm.Model
	NamaDriver  string `gorm:"type:varchar(100)"`
	NoID        string `gorm:"type:varchar(100)"`
	KendaraanId int    `gorm:"type:int(100)"`
	Phone       string `gorm:"type:varchar(100)"`
	Alamat      string `gorm:"type:varchar(100)"`
}
