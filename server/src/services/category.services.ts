import Category from "../schemas/category.schema"
import category from "../interfaces/category.interface"

const createCategory = async (data: category): Promise<any> => {
  const newCategory = await Category.create(data)
  return newCategory
}

const getAllCategories = async (): Promise<any[]> => {
  const categories = await Category.find()
  return categories
}

const getCategoryById = async (categoryId: string): Promise<any> => {
  const foundCategory = await Category.findById(categoryId)
  return foundCategory
}

const updateCategoryById = async (
  categoryId: string,
  updateData: Partial<category>
): Promise<any> => {
  const updated = await Category.findByIdAndUpdate(categoryId, updateData, {
    new: true,
  })
  return updated
}

const deleteCategoryById = async (categoryId: string): Promise<string> => {
  await Category.findByIdAndDelete(categoryId)
  return "Category deleted successfully"
}

export {
  createCategory,getAllCategories,getCategoryById,updateCategoryById,deleteCategoryById,
}
