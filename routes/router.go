package routes

import (
	"kerkomapp/handler"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func Init(r *gin.Engine, db *gorm.DB) {
	handler := handler.NewHandler(db)
	// index
	r.GET("/", handler.IndexPage)

	r.POST("/register", handler.Register)
	r.POST("/login", handler.Login)
	r.GET("/logout", handler.Logout)
	r.GET("/login", handler.LoginPage)
	r.GET("/register", handler.RegisterPage)
	r.GET("/about", handler.AboutPage)
	r.GET("/contact", handler.ContactPage)
	r.GET("/delivery", handler.DeliveryPage)

	// 404
	r.NoRoute(func(c *gin.Context) {
		c.HTML(404, "404.html", nil)
	})
}
