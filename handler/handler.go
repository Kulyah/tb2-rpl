package handler

import (
	"fmt"
	"kerkomapp/entity"
	"kerkomapp/render"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

// type handler contain database
type Handler struct {
	db *gorm.DB
}

// NewHandler return new handler
func NewHandler(db *gorm.DB) *Handler {
	return &Handler{db}
}

func (h *Handler) IndexPage(c *gin.Context) {
	user := h.getUser(c)

	fmt.Println(user)
	c.HTML(200, "index.html", gin.H{
		"User": user,
	})
}

// register handler post
func (h *Handler) Register(c *gin.Context) {
	// get data from form
	name := c.PostForm("fname")
	email := c.PostForm("email")
	uniqId := c.PostForm("id")
	gender := c.PostForm("gender")
	phone := c.PostForm("phone")
	password := c.PostForm("password")
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}

	user := entity.User{}
	err = h.db.Where("email = ?", email).First(&user).Error
	if err == nil {
		render.ErrMsgf(c, "/login", "User dengan email %s sudah terdaftar", email)
		return
	}

	// save to database
	user = entity.User{
		Name:     name,
		Email:    email,
		UniqId:   uniqId,
		Gender:   gender,
		Phone:    phone,
		Password: string(hashedPassword),
	}
	err = h.db.Create(&user).Error
	if err != nil {
		panic(err)
	}
	// redirect
	render.Msgf(c, "/login", "Register berhasil")
}

// login handler post
func (h *Handler) Login(c *gin.Context) {
	// get data from form
	email := c.PostForm("email")
	password := c.PostForm("password")

	// get data from database
	var user entity.User
	err := h.db.Where("email = ?", email).First(&user).Error
	fmt.Println(err)
	if err != nil {
		render.ErrMsgf(c, "/", "User dengan email %s tidak ditemukan", email)
		return
	}

	// compare password
	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	fmt.Println(err)
	if err != nil {
		render.ErrMsgf(c, "/", "Password salah")
		return
	}

	h.db.Where("email = ?", email).First(&user)
	sessions := sessions.Default(c)
	sessions.Set("userId", user.Model.ID)
	sessions.Save()

	// redirect
	render.Msgf(c, "/", "Login berhasil")
}

// logout handler get
func (h *Handler) Logout(c *gin.Context) {
	sessions := sessions.Default(c)
	sessions.Clear()
	sessions.Save()

	c.Redirect(302, "/")
}

// login page
func (h *Handler) LoginPage(c *gin.Context) {
	c.HTML(200, "login.html", nil)
}

// register page
func (h *Handler) RegisterPage(c *gin.Context) {
	c.HTML(200, "register.html", nil)
}

func (h *Handler) getUser(c *gin.Context) *entity.User {
	sessions := sessions.Default(c)
	userId := sessions.Get("userId")
	var user *entity.User
	if userId != nil {
		h.db.Where("id = ?", 4).First(user)
	}
	fmt.Println(user)
	return user
}

func (h *Handler) ContactPage(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "contact.html", gin.H{
		"User": user,
	})
}

func (h *Handler) AboutPage(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "about.html", gin.H{
		"User": user,
	})
}

func (h *Handler) DeliveryPage(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "delivery.html", gin.H{
		"User": user,
	})
}

func (h *Handler) AdminDashboard(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "admin_dashboard.html", gin.H{
		"User": user,
	})
}

func (h *Handler) UserDashboard(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "user_dashboard.html", gin.H{
		"User": user,
	})
}

func (h *Handler) Profile(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "profile.html", gin.H{
		"User": user,
	})
}

func (h *Handler) ManageUser(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "manageuser.html", gin.H{
		"User": user,
	})
}

func (h *Handler) MPelanggan(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "mpelanggan.html", gin.H{
		"User": user,
	})
}

func (h *Handler) MDriver(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "mdriver.html", gin.H{
		"User": user,
	})
}

func (h *Handler) MKendaraan(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "mkendaraan.html", gin.H{
		"User": user,
	})
}

func (h *Handler) MDelivery(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "mdelivery.html", gin.H{
		"User": user,
	})
}

func (h *Handler) DStatus(c *gin.Context) {
	user := h.getUser(c)

	c.HTML(200, "dstatus.html", gin.H{
		"User": user,
	})
}
