import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort("name");
    res.status(200).json({
      success: true,
      message: "Fetch Categories",
      categories
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "Server error" 
    });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name required" });
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ message: "Category exists" });

    const category = await Category.create({ name });
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ 
      success: false,
      error: error.message,
      message: "Server error" 
    });
  }
};

export const updateCategoryController = async (req,res) => {
  try{
      let {name} = req.body;
      let {id} = req.params;

      const category = await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});
      res.status(200).send({
          success: true,
          message: "Category Updated Successfully",
          category,
      });

  }catch(error){
      // console.log(error);
      res.status(500).send({
          success: false,
          error,
          message: "Error white updating category"
      })
  }
}


export const deleteCategoryController = async (req,res) => {
  try {
      const {id} = req.params;
      // console.log("id",id);
      const deletedCategory = await Category.findByIdAndDelete(id);
      if(!deletedCategory){
          return res.status(400).send({
              success: false,
              message: "This category does not exists",
          });
      }
      res.status(200).send({
          success: true,
          message: "Category deleted successfully",
          deletedCategory
      });
  } catch (error) {
      // console.log(error);
      res.status(500).send({
          success: false,
          error,
          message: "Error while deleting category",
      });
  }
}