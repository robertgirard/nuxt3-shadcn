<script setup>
  const items = ref([
    {
      title: "Overview",
      path: '/',
      icon: "ri:dashboard-line"
    },
    {
      title: "Transactions",
      path: '/transactions',
      icon: 'fluent-mdl2:b-i-dashboard'
    },
    {
      title: "Account",
      path: '/account'
    },
    {
      title: "Contacts",
      path: '/contacts'
    },
    {
      title: "Settings",
      path: '/settings'
    }
  ])

  const icon = ''
</script>

<template>
  <div>
    <header class="items-center gap-2 p-4 hover:scale=[101%] transition cursor-pointer">
      <div>
        <Logo />        
      </div>
      <div>
        <p class="font-bold text-black">Nuxt Money</p>
      </div>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink :href="item.path" v-for='(item, index) in items' :key='index' class="flex items-center gap-2 px-2 py-1 transtion rounded cursor-pointer hover:bg-green-300">
          <Icon v-if="item.title == 'Overview'" name="ri:dashboard-line" size="20"  color="black"/>
          <Icon v-if="item.title == 'Transactions'" name="mage:dashboard-bar" size="20"  color="black"/>    
          <Icon v-if="item.title == 'Account'" name="ph:factory-thin" size="20"  color="black"/>
          <Icon v-if="item.title == 'Contacts'" name="mingcute:contacts-3-line" size="20"  color="black"/>      
          <Icon v-if="item.title == 'Settings'" name="carbon:settings" size="20"  color="black"/>
          <!-- <Icon :name="item.name" size="20"  color="black"/> -->
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
