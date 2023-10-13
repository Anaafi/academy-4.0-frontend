<script setup>

</script>

<template>
    <section>
        <div class="hero-main">
            <p>Are you sure you want to decline this application?</p>
            <div class="btn">
                <button class="yes">Yes</button>
                <button class="no">No</button>
            </div>
            
        </div>
    </section>
</template>

<style scoped>
section{
    background: #FFF;
    width: 458px;
    height: 300px;
}
.hero-main{
    display: flex;
    flex-direction: column;
    padding: 75px 96px;
    gap: 48px;
}
.hero-main p{
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
}
.btn{
    display: flex;

}
.yes, .no{
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 14px 50px;
    border-radius: 4px;
    background: #7557D3;
    border: none;
}

.no{
    color: #000;
    background: #FFF;
}
</style>