package entity

import (
	"github.com/jinzhu/gorm"
)

type Deliverystatus struct {
	gorm.Model
	NoResi           string `gorm:"type:varchar(100)"`
	AlamatPenerima   string `gorm:"type:varchar(100)"`
	NamaPenerima     string `gorm:"type:varchar(100)"`
	KurirId          int    `gorm:"type:int(100)"`
	NoHPKurir        string `gorm:"type:varchar(100)"`
	TanggalPembelian string `gorm:"type:varchar(100)"`
	TanggalSampai    string `gorm:"type:varchar(100)"`
	Status           string `gorm:"type:varchar(100)"`
}
