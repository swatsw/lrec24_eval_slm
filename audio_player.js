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
    })
}

function add_utt_selector(utterances, utterance_corpus, section_id){
    selector_html = ""
    selector_html += '<div class=textbox_element id="utt_selector_div">'
    selector_html += 'sample list (click to select) >> </br>'
    selector_html += '<select id="utt_list_'+section_id+'" name="utt_list" size='+ (1)+ '>'
    for (var i =0; i < utterances.length; i++) {
        selector_html += '<option value="l'+ utterances[i]+'i'+i+'">input'+i+': '+utterance_corpus[i]+'</option>'
    }
    selector_html += "</select> </br>"
    selector_html += "</div>"
    document.body.insertAdjacentHTML('beforeend', selector_html)
}

var SAMPLES_PER_UTT = 3
function audio_player(speakers, text_prompts, section_id) {
    // audio selector logic
    var selector = document.getElementById("utt_list_"+section_id)
    selector.addEventListener('input', function(){
        selected = this.value
        l = selected.indexOf('i')
        // slice until the end of the string to get the input index
        input_i = parseInt(selected.slice(l+1))
    
        // update speakers
        for (var i=0;i < speakers.length; i++) {
            speaker = speakers[i]
            for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
                audio_element_name = section_id + '-' + speaker + '_sample_' + sample_i
                audio_element = document.getElementById(audio_element_name)
                audio_path = 'wav/' + speaker + '_' + (input_i) + '_sample_' + sample_i + '.wav' 
                audio_element.src = audio_path
                audio_element.volume = get_default_vol()
            }
        }

        var text_prompt = document.getElementById("text_prompt_"+section_id)
        text_prompt.innerText = "TTS: " + text_prompts[input_i]
    })

    // set default volume
    for (var i=0;i < speakers.length; i++) {
        speaker = speakers[i]
        for (var sample_i=0; sample_i < SAMPLES_PER_UTT; sample_i++) {
            audio_element_name = section_id + '-' + speaker + '_sample_' + sample_i
            audio_element = document.getElementById(audio_element_name)
            audio_element.volume = get_default_vol()
        }
    }
}

function init_text_prompt(text_prompts, text_prompt_id){
    var text_prompt = document.getElementById(text_prompt_id)
    text_prompt.innerText = "TTS: " + text_prompts[0]
}

function add_context_utt_selector(num_utts) {
    selector_html = ""
    selector_html += '<div class=textbox_element id="utt_selector_div">'
    selector_html += 'sample list (click to select) >> </br>'
    selector_html += '<select id="context-utt_list" name="context-utt_list" size='+ (1)+ '>'
    for (var i =0; i < num_utts; i++) {
        selector_html += '<option value="context-'+i+'">input'+i+': dailydialog </option>'
    }
    selector_html += "</select> </br>"
    selector_html += "</div>"
    document.body.insertAdjacentHTML('beforeend', selector_html)
}

var CONTEXT_SAMPLES_PER_UTT = 3
function context_audio_player(model_list, wav_list, text_list) {
    // audio selector logic
    var selector = document.getElementById("context-utt_list")
    selector.addEventListener('input', function(){
        selected = this.value
        // value: value="context-'+i+'
        input_i = parseInt(selected.slice(selected.indexOf('-')+1))
    
        // update speakers
        for (var model_i=0;model_i < model_list.length; model_i++) {
            model = model_list[model_i]
            for (var sample_i=0; sample_i < CONTEXT_SAMPLES_PER_UTT; sample_i++) {
                // f"context_{model}_sample_{sample_i}"
                audio_element_name =  'context_' + model + '_sample_' + sample_i
                audio_element = document.getElementById(audio_element_name)
                audio_path = 'wav/' + wav_list[input_i][model_i][sample_i] 
                audio_element.src = audio_path
                audio_element.volume = get_default_vol()
            }
        }

        var text_prompt = document.getElementById("context_text_prompt")
        text_prompt.innerText = text_list[input_i][0] + "\n" + text_list[input_i][1]
    })

    // set default speaker
    default_input_i = 0
    for (var model_i=0;model_i < model_list.length; model_i++) {
        model = model_list[model_i]
        for (var sample_i=0; sample_i < CONTEXT_SAMPLES_PER_UTT; sample_i++) {
            // f"context_{model}_sample_{sample_i}"
            audio_element_name =  'context_' + model + '_sample_' + sample_i
            audio_element = document.getElementById(audio_element_name)
            audio_path = 'wav/' + wav_list[default_input_i][model_i][sample_i] 
            audio_element.src = audio_path
            audio_element.volume = get_default_vol()
        }
    }

    // set default volume
    for (var model_i=0;model_i < model_list.length; model_i++) {
        model = model_list[model_i]
        for (var sample_i=0; sample_i < CONTEXT_SAMPLES_PER_UTT; sample_i++) {
            audio_element_name =  'context_' + model + '_sample_' + sample_i
            audio_element = document.getElementById(audio_element_name)
            audio_element.volume = get_default_vol()
        }
    }
}

function init_context_text_prompt(text_prompts, text_prompt_id){
    var text_prompt = document.getElementById(text_prompt_id)
    text_prompt.innerText = text_prompt.innerText = text_prompts[0][0] + "\n" + text_prompts[0][1]
}