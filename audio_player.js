var default_vol = 0.2
function get_default_vol(){
    return default_vol;
}

function set_default_vol(new_vol){
    default_vol = new_vol
}

function add_default_vol_listner(){
    default_vol_element = document.getElementById('default_vol_control')
    default_vol_element.addEventListener('input', function(){
        set_default_vol(this.value)
        // console.log('default volume changed to ' + this.value)
    })
}

function add_utt_selector(utterances, utterance_corpus){
    selector_html = ""
    selector_html += 'sample list (click to select) >> </br>'
    selector_html += '<select id="utt_list" name="utt_list" size='+ (1)+ '>'
    for (var i =0; i < utterances.length; i++) {
        selector_html += '<option value="l'+ utterances[i]+'i'+i+'">input'+i+': '+utterance_corpus[i]+'</option>'
    }
    selector_html += "</select> </br>"
    document.body.insertAdjacentHTML('beforeend', selector_html)
}

var SAMPLES_PER_UTT = 3
function audio_player(vits_speakers, bark_speakers, models, utterances, text_prompts) {
    // audio selector logic
    var selector = document.getElementById("utt_list")
    selector.addEventListener('input', function(){
        selected = this.value
        l = selected.indexOf('i')
        // slice until the end of the string to get the input index
        input_i = parseInt(selected.slice(l+1))
    
        // update vits speakers
        for (var i=0;i < vits_speakers.length; i++) {
            speaker = vits_speakers[i]
            // audio["src"] = f"wav/{model}-{speaker}_{START_UTT}_sample_{sample_i}.wav"
            // audio["id"] = f"{model}_{speaker}_sample_{sample_i}"
            for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
                audio_element_name = 'vits_' + speaker + '_sample_' + sample_i
                audio_element = document.getElementById(audio_element_name)
                audio_path = 'wav/' + 'vits' + '-' + speaker + '_' + (input_i) + '_sample_' + sample_i + '.wav' 
                audio_element.src = audio_path
                audio_element.volume = get_default_vol()
            }
        }

        // update bark-small speakers
        for (var i=0;i < bark_speakers.length; i++) {
            speaker = bark_speakers[i]
            // audio["src"] = f"wav/{model}-{speaker}_{START_UTT}_sample_{sample_i}.wav"
            // audio["id"] = f"{model}_{speaker}_sample_{sample_i}"
            for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
                audio_element_name = 'bark-small_' + speaker + '_sample_' + sample_i
                audio_element = document.getElementById(audio_element_name)
                audio_path = 'wav/' + 'bark-small' + '-' + speaker + '_' + (input_i) + '_sample_' + sample_i + '.wav' 
                audio_element.src = audio_path
                audio_element.volume = get_default_vol()
            }
        }

        var text_prompt = document.getElementById("text_prompt")
        text_prompt.innerText = "TTS: " + text_prompts[input_i]
    })

    // set default volume
    // update vits speakers
    for (var i=0;i < vits_speakers.length; i++) {
            speaker = vits_speakers[i]
            // audio["src"] = f"wav/{model}-{speaker}_{START_UTT}_sample_{sample_i}.wav"
            // audio["id"] = f"{model}_{speaker}_sample_{sample_i}"
            for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
                audio_element_name = 'vits_' + speaker + '_sample_' + sample_i
                audio_element = document.getElementById(audio_element_name)
                audio_element.volume = get_default_vol()
            }
        }

    // update bark-small speakers
    for (var i=0;i < bark_speakers.length; i++) {
        speaker = bark_speakers[i]
        // audio["src"] = f"wav/{model}-{speaker}_{START_UTT}_sample_{sample_i}.wav"
        // audio["id"] = f"{model}_{speaker}_sample_{sample_i}"
        for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
            audio_element_name = 'bark-small_' + speaker + '_sample_' + sample_i
            audio_element = document.getElementById(audio_element_name)
            audio_element.volume = get_default_vol()
        }
    }
}

function init_text_prompt(text_prompts){
    var text_prompt = document.getElementById("text_prompt")
    text_prompt.innerText = "TTS: " + text_prompts[0]
}