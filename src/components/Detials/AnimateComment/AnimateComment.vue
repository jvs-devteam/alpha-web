<template>
    <div id="animate-comment">
        <h2 id="animate-comment-title">评论({{comment.count}})</h2>
    </div>
</template>

<script>
export default {
    name: "AnimateComment",
    props: {
        vid: {
            type: Array,
            default() {
                return 0;
            }
        }
    },
    data() {
        return {
            comment: {
                count: 20 ,
                commentList: [
                    
                ]
            }
        }
    }
}
</script>

<style scoped>
#animate-comment {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
}

#animate-comment-title {
  font-size: 26px;
  padding: 0 10px;
  margin: 5px 0;
}
</style>