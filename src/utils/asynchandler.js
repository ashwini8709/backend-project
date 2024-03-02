const asyncHandler=(requestHandler)=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((error)=>next(error))
  }

}


export default asyncHandler





// wraper function for handling error

// const asynchandler=(fn)=>async (req,res,next)=>{
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code ||500).json({
//         success: false,
//         message: err.message
//     })
//   }
// } 
