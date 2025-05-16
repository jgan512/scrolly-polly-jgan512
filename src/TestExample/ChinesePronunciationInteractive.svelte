<script>
  import { onMount } from 'svelte';
  
  // Track audio and visibility states
  let audioElement;
  let showTranslation = false;
  let showTransliteration = false;
  let initialClick = false;
  
  // Path to the audio file and image
  const audioSrc = "../src/TestExample/Audio/xiaolongbao.mp3";
  const imageSrc = "../src/TestExample/Images/xiaolongbao.jpg";
  
  function playAudio() {
    if (!initialClick) {
      initialClick = true;
      setTimeout(() => { showTranslation = true; }, 500);
      setTimeout(() => { showTransliteration = true; }, 1500);
    }
    
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
  
  onMount(() => {
    // Create audio element programmatically
    audioElement = new Audio(audioSrc);
    return () => {
      // Cleanup
      if (audioElement) {
        audioElement.pause();
        audioElement = null;
      }
    };
  });
</script>

<div class="interactive-wrapper">
  <div class="interactive-container">
    <h2 class="interactive-heading">Chinese food term example</h2>
    
    <div class="interactive-display">
      <!-- Image and Chinese characters side by side -->
      <div class="image-container">
        <img src={imageSrc} alt="Xiaolongbao (soup dumplings)" class="food-image" />
      </div>
      
      <div class="chinese-wrapper">
        <button class="chinese-characters" on:click={playAudio}>
          小笼包
          <span class="click-instruction">Click to hear</span>
        </button>
        
        {#if initialClick}
          <div class="audio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
        {/if}
      </div>
    </div>
    
    <div class="translation-section">
      {#if showTranslation}
        <div class="translation-row" class:visible={showTranslation}>
          Translation: Soup Dumplings
        </div>
      {/if}
      
      {#if showTransliteration}
        <div class="translation-row" class:visible={showTransliteration}>
          Transliteration: Xiǎolóngbāo
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .interactive-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    background-color: #f1dbbd;
    padding: 2rem 0;
  }
  
  .interactive-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    text-align: center;
    overflow: hidden;
  }
  
  .interactive-heading {
    font-family: Georgia, serif;
    color: #333;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  
  /* Added for image and text side by side */
  .interactive-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  
  .image-container {
    flex: 0 0 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .food-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .chinese-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  
  .chinese-characters {
    font-size: 5rem;
    color: #c41230;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    padding: 1rem 2rem;
    border-radius: 10px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    font-family: "Noto Serif SC", serif;
  }
  
  .chinese-characters:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(196, 18, 48, 0.2);
  }
  
  .chinese-characters:active {
    transform: scale(0.98);
  }
  
  .click-instruction {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    color: #666;
    white-space: nowrap;
    font-family: Georgia, serif;
  }
  
  .audio-icon {
    margin-left: 1rem;
    color: #c41230;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .translation-section {
    margin-top: 2rem;
    min-height: 80px;
    width: 100%;
  }
  
  .translation-row {
    padding: 1rem;
    margin: 0.5rem auto;
    border-radius: 8px;
    background-color: #f8f8f8;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    max-width: 500px;
    width: 90%;
    font-family: Georgia, serif;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }
  
  .translation-row.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .interactive-container {
      padding: 2rem 1.5rem;
      width: 90%;
    }
    
    .interactive-heading {
      font-size: 1.4rem;
    }
    
    .chinese-characters {
      font-size: 4rem;
    }
    
    .translation-row {
      width: 100%;
      padding: 0.8rem;
      font-size: 1.3rem;
    }
    
    .image-container {
      flex: 0 0 180px;
      height: 180px;
    }
  }
  
  @media (max-width: 480px) {
    .interactive-container {
      padding: 1.5rem 1rem;
      width: 95%;
    }
    
    .interactive-heading {
      font-size: 1.2rem;
    }
    
    .chinese-characters {
      font-size: 3.5rem;
      padding: 0.5rem 1rem;
    }
    
    .translation-row {
      margin: 0.5rem auto;
      font-size: 1.2rem;
    }
    
    .image-container {
      flex: 0 0 150px;
      height: 150px;
    }
  }
</style>

<!-- Add Noto Serif SC font for better display of Chinese characters -->
<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>