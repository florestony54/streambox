from django import forms
from rooms.models import Channel

class RoomForm(forms.Form):
    post = forms.CharField(label='https://www.twitch.tv/')

class ChannelForm(forms.ModelForm):

    class Meta:
        model = Channel
        fields = ('name',)
        widgets = {
        'name': forms.TextInput(attrs={'class': 'form-control',
                                        'id':'basic-url',
                                        'aria-describedby':'basic-addon3',
                                        'placeholder':'antoniousmaximus'})
        }
