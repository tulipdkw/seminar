// 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 卡片悬停效果增强
  const cards = document.querySelectorAll('.seminar-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // 导航栏滚动效果
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // 向下滚动，隐藏导航栏
      header.style.transform = 'translateY(-100%)';
    } else {
      // 向上滚动，显示导航栏
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  
  // 懒加载背景图片
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bgElement = entry.target.querySelector('.card-background');
        if (bgElement && bgElement.style.backgroundImage) {
          bgElement.style.opacity = '0.3';
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 观察所有卡片
  cards.forEach(card => imageObserver.observe(card));
  
  // 添加加载动画
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    });
  }, { threshold: 0.1 });
  
  // 为所有卡片添加滚动动画
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    animateOnScroll.observe(card);
  });
});

// 添加CSS动画到页面
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .site-header {
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(style);