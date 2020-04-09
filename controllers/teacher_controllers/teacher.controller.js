var dbSinhVien=require('../../models/model_student');
module.exports.teacher=function(req,res){
    var Object={ 
        MSSV:1710146,
        HoVaTen:"Trần Văn Lãm",
        GioiTinh:"Lép",
        Email:"1710196@dlu.edu.vn",
        SDT:"0365187553",
        Lop:"CTK41",
        Khoa:"Công nghệ thông tin",
        HinhAnh:"Trần Văn Lãm.jpg",
        }
    dbSinhVien.insertMany(Object,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("thành công");
        }
    })        
    
    
    res.render('./teacher_views/teacher.ejs')
};
module.exports.teacher_face=function(req,res){res.render('./teacher_views/teacher_face.ejs')};
module.exports.teacher_tructiep=function(req,res){res.render('./teacher_views/teacher_tructiep.ejs')};
module.exports.teacher_qr=function(req,res){res.render('./teacher_views/teacher_qr.ejs')};
