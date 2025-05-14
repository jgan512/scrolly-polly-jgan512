<script lang="ts">
  import { onMount } from 'svelte';
  
  // Timeline data
  const timelineEvents = [
    {
      year: "1849",
      image: "../src/TestExample/Images/1849.jpg"
    },
    {
      year: "1850",
      image: "../src/TestExample/Images/1800s.jpg"
    },
    {
      year: "1882",
      image: "../src/TestExample/Images/1882.jpg"
    },
    {
      year: "1896",
      image: "../src/TestExample/Images/1896.jpg"
    },
    {
      year: "1920",
      image: "../src/TestExample/Images/1920.jpg"
    },
    {
      year: "1943",
      image: "../src/TestExample/Images/1943.jpg"
    },
    {
      year: "1965",
      image: "../src/TestExample/Images/1965.jpg"
    },
    {
      year: "1967",
      image: "../src/TestExample/Images/1967.jpg"
    },
    {
      year: "1975",
      image: "../src/TestExample/Images/1975.jpg"
    },
    {
      year: "1980",
      image: "../src/TestExample/Images/1980.jpg"
    },
    {
      year: "2000s",
      image: "../src/TestExample/Images/2000s.jpg"
    },
    {
      year: "2025",
      image: "../src/TestExample/Images/2025.jpg"
    }
  ];
  
  let currentEvent = 0;
  let timelineContainer: HTMLElement;
  
  // Handle scrolling
  function handleScroll() {
    if (!timelineContainer) return;
    
    const container = timelineContainer;
    const scrollPosition = container.scrollTop;
    const itemHeight = container.scrollHeight / timelineEvents.length;
    
    // Determine which event is currently in view
    const newEvent = Math.floor(scrollPosition / itemHeight + 0.5);
    if (newEvent !== currentEvent && newEvent < timelineEvents.length) {
      currentEvent = newEvent;
    }
  }
  
  onMount(() => {
    if (timelineContainer) {
      timelineContainer.addEventListener('scroll', handleScroll);
      return () => {
        timelineContainer.removeEventListener('scroll', handleScroll);
      };
    }
  });
</script>

<div class="timeline-section">
  <div class="timeline-wrapper">
    <!-- Timeline Navigation -->
    <div class="timeline-nav">
      {#each timelineEvents as event, index}
        <div 
          class="timeline-dot {currentEvent === index ? 'active' : ''}"
          on:click={() => {
            currentEvent = index;
            if (timelineContainer) {
              const itemHeight = timelineContainer.scrollHeight / timelineEvents.length;
              timelineContainer.scrollTo({
                top: index * itemHeight,
                behavior: 'smooth'
              });
            }
          }}
        >
          <span class="year-label">{event.year}</span>
        </div>
      {/each}
    </div>
    
    <!-- Scrollable Images -->
    <div class="timeline-container" bind:this={timelineContainer}>
      {#each timelineEvents as event, index}
        <div 
          class="timeline-event" 
          class:active={currentEvent === index}
          style="background-image: url('{event.image}')"
        >
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .timeline-section {
    width: 100%;
    margin: 3rem 0;
    background-color: #f1dbbd;
    padding: 2rem 0;
  }
  
  .timeline-wrapper {
    position: relative;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 675px; /* 16:9 ratio - 1200*9/16 = 675 */
    aspect-ratio: 16/9;
  }
  
  /* Timeline Navigation - Vertical on Left */
  .timeline-nav {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 80%;
    justify-content: space-between;
  }
  
  .timeline-nav::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.6);
  }
  
  .timeline-dot {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 3px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .timeline-dot.active {
    background-color: #c41230;
    border-color: #c41230;
    transform: scale(1.3);
  }
  
  .timeline-dot:hover {
    transform: scale(1.2);
  }
  
  .year-label {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-family: Georgia, serif;
    font-size: 0.9rem;
    color: #fff;
    white-space: nowrap;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2px 8px;
    border-radius: 3px;
  }
  
  .timeline-dot.active .year-label {
    background-color: #c41230;
    font-weight: bold;
  }
  
  /* Scrollable Container with Images */
  .timeline-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    scroll-behavior: smooth;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: #c41230 #f1dbbd;
    background-color: #f1dbbd;
  }
  
  .timeline-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .timeline-container::-webkit-scrollbar-track {
    background: #f1dbbd;
    border-radius: 4px;
  }
  
  .timeline-container::-webkit-scrollbar-thumb {
    background: #c41230;
    border-radius: 4px;
  }
  
  .timeline-container::-webkit-scrollbar-thumb:hover {
    background: #a00e26;
  }
  
  /* Timeline Events with Background Images */
  .timeline-event {
    height: 675px; /* 16:9 ratio */
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.5s ease;
    opacity: 0;
  }
  
  .timeline-event.active {
    opacity: 1;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .timeline-wrapper {
      height: 506px; /* Maintain 16:9 ratio - 900*9/16 = 506 */
      max-width: 900px;
    }
    
    .timeline-event {
      height: 506px;
    }
    
    .timeline-nav {
      left: 0.5rem;
      gap: 1rem;
    }
    
    .year-label {
      font-size: 0.8rem;
      padding: 1px 6px;
    }
  }
  
  @media (max-width: 480px) {
    .timeline-wrapper {
      height: 337px; /* Maintain 16:9 ratio - 600*9/16 = 337 */
      max-width: 600px;
    }
    
    .timeline-event {
      height: 337px;
    }
    
    .year-label {
      font-size: 0.7rem;
    }
  }
</style>